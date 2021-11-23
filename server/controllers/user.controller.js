import crypto from "crypto";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import User from "../models/userModels/user.js";
import Token from "../models/userModels/token.js";
import getHostName from "../utils/getHostName.js";

export const signup = function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res.status(500).send(err.message);
    } else if (user) {
      return res
        .status(400)
        .send("This email address is already associated with another account.");
    }

    user = new User({ name: req.body.name, email: req.body.email });
    user.save(function (err) {
      if (err) {
        return res
          .status(500)
          .send("I was unable to save your details. Please try again.");
      }

      var token = new Token({
        _userId: user._id,
        token: crypto.randomBytes(16).toString("hex"),
      });
      token.save(function (err) {
        if (err) {
          return res
            .status(500)
            .send(
              "I was unable to create a profile for you. Please try again."
            );
        }

        const transporter = nodemailer.createTransport(
          sendgridTransport({
            auth: {
              api_key: process.env.SENDGRID_APIKEY,
            },
          })
        );
        var mailOptions = {
          from: "hey@maxrostron.com",
          to: user.email,
          subject: "Account Verification Link",
          text:
            "Hello " +
            req.body.name +
            ",\n\n" +
            "Please verify your account by clicking the link: \n]" +
            `${getHostName()}` +
            "/subscription/verify/" +
            user.email +
            "/" +
            token.token +
            "\n\nThank You!\n",
        };
        transporter.sendMail(mailOptions, function (err) {
          if (err) {
            return res
              .status(500)
              .send("Oops, an issue occured. Please try again!");
          }
          return res
            .status(200)
            .send("A verification link has been sent to " + user.email + ".");
        });
      });
    });
  });
};

export const verifyEmail = function (req, res, next) {
  Token.findOne({ token: req.params.token }, function (err, token) {
    if (!token) {
      return res
        .status(400)
        .send(
          "Your verification link may have expired. Please click on the link below to re-verify your email."
        );
    }
    User.findOne(
      { _id: token._userId, email: req.params.email },
      function (err, user) {
        if (!user) {
          return res
            .status(401)
            .send(
              `We were unable to find the email address "${req.params.email}" for this verification. Please try signing up again!`
            );
        }

        if (user.isVerified) {
          return res
            .status(200)
            .send(`${req.params.email} has already been verified.`);
        }
        user.isVerified = true;
        user.save(function (err) {
          if (err) {
            return res
              .status(500)
              .send(
                `There was an error saving your details with your sign up: ${err.message}`
              );
          }
          return res
            .status(200)
            .send(
              `${req.params.email} has been successfully verified. You will now receive future updates from me!`
            );
        });
      }
    );
  });
};

export const resendLink = function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      return res
        .status(400)
        .send(
          "We were unable to find an account with that email. Make sure your Email is correct!"
        );
    }
    if (user.isVerified) {
      return res
        .status(200)
        .send(
          "This account has been already verified. You do not need to take any further action."
        );
    }
    var token = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex"),
    });
    token.save(function (err) {
      if (err) {
        return res
          .status(500)
          .send(
            "I was unable to re-send a verification link. Please try again later."
          );
      }

      const transporter = nodemailer.createTransport(
        sendgridTransport({
          auth: {
            api_key: process.env.SENDGRID_APIKEY,
          },
        })
      );
      var mailOptions = {
        from: "hey@maxrostron.com",
        to: user.email,
        subject: "Account Verification Link",
        text:
          "Hello " +
          user.name +
          ",\n\n" +
          "Please verify your account by clicking the link: \n" +
          `${getHostName()}` +
          "/api/user/verification/" +
          user.email +
          "/" +
          token.token +
          "\n\nThank You!\n",
      };
      transporter.sendMail(mailOptions, function (err) {
        if (err) {
          return res
            .status(500)
            .send("Sorry, a problem occurred. Please try again.");
        }
        return res
          .status(200)
          .send("A new verification link has been sent to " + user.email + ".");
      });
    });
  });
};

export const initiateUnsubscribe = function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res
        .status(500)
        .send("Oops! Sorry, an error occured. Please try again.");
    } else if (user) {
      var token = new Token({
        _userId: user._id,
        token: crypto.randomBytes(16).toString("hex"),
      });
      token.save(function (err) {
        if (err) {
          return res
            .status(500)
            .send("Oops! Sorry, an error occured. Please try again.");
        }

        const transporter = nodemailer.createTransport(
          sendgridTransport({
            auth: {
              api_key: process.env.SENDGRID_APIKEY,
            },
          })
        );
        var mailOptions = {
          from: "hey@maxrostron.com",
          to: user.email,
          subject: "Confirm subscription changes",
          text:
            "Hello " +
            req.body.name +
            ",\n\n" +
            "Please confirm that you would like to stop receiving emails from my blog by clicking the link below: \n" +
            `${getHostName()}` +
            "/subscription/unsubscribe/" +
            user.email +
            "/" +
            token.token +
            "\n\nThank You!\n",
        };

        transporter.sendMail(mailOptions, function (err) {
          if (err) {
            return res
              .status(500)
              .send(
                "Technical Issue!, Please click on resend for verify your Email."
              );
          }
          return res
            .status(200)
            .send(
              "A verification email has been sent to " +
                user.email +
                ". Please follow the link provided to stop receiving new updates."
            );
        });
      });
    } else {
      return res
        .status(400)
        .send(
          "I was unable to find an address associated with this account. Please try again or email hey@maxrostron.com."
        );
    }
  });
};

export const removeUser = function (req, res, next) {
  Token.findOne({ token: req.params.token }, function (err, token) {
    if (!token) {
      return res
        .status(400)
        .send(
          "Your verification link may have expired. Please click on resend to try again."
        );
    } else {
      User.findOne(
        { _id: token._userId, email: req.params.email },
        function (err, user) {
          if (!user) {
            return res
              .status(401)
              .send(
                "We were unable to find a user for this verification. Please Sign Up!"
              );
          } else {
            User.findOneAndDelete(
              {
                _id: token._userId,
              },
              (err, User) => {
                if (!err) {
                  return res
                    .status(200)
                    .send(`${User.email} has been successfully unsubscribed.`);
                } else {
                  return res
                    .status(400)
                    .send(
                      "There was an error unsubscribing you. Please try again."
                    );
                }
              }
            );
          }
        }
      );
    }
  });
};
