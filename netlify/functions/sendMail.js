const nodemailer = require('nodemailer')
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT, // Default Mailtrap SMTP port
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
});

exports.handler = async (event, context) => {
  const data = event.queryStringParameters;
  const attendingEventOne = []
  const notAttendingEventOne = []
  const attendingEventTwo = []
  const notAttendingEventTwo = []
  let email = ''
  for (const [key, value] of Object.entries(data)) {
    let person = JSON.parse(value);

    if (key == 0)
      email = person.email

    if (person.attending_welcome_party)
      attendingEventOne.push(person)
    else
      notAttendingEventOne.push(person)

    if (person.attending_wedding)
      attendingEventTwo.push(person)
    else
      notAttendingEventTwo.push(person)
  }

  const logoPath = path.join(process.cwd(), 'assets', 'logo.png');

  const dynamicAttendingOneText = getDynamicText(attendingEventOne.length, attendingEventOne, true)
  const dynamicNotAttendingOneText = getDynamicText(notAttendingEventOne.length, notAttendingEventOne, false)
  const dynamicAttendingTwoText = getDynamicText(attendingEventTwo.length, attendingEventTwo, true)
  const dynamicNotAttendingTwoText = getDynamicText(notAttendingEventTwo.length, notAttendingEventTwo, false)

// Define the email content
  const mailOptions = {
    from: 'michellenguy3n@gmail.com',
    to: email,
    subject: 'Michelle and Keaton Wedding - RSVP Confirmation',
    attachments: [
      {
        filename: 'logo.png',
        content: fs.createReadStream(logoPath),
        cid: 'logo', // Use the same CID reference in the HTML
      },
    ],
    html: `<html>
<head>
    <style>
        body {
            background-image: linear-gradient(120deg, rgb(209, 219, 233), rgb(240, 250, 243));
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 'Helvetica Neue', Arial, sans-serif;
            height: 50vh;
            width: 100vw;
        }

        .wrapper {
            width: 75%;
            max-width: 600px;
            margin: 8% auto;
            background-color: white;
        }

        .box {
            box-shadow: 0px 0px 10px #afc0d9;
            background-color: #f7f6f3;
            padding: 5px;
            border-radius: .25rem;
            text-align: center;
            margin-bottom: 10px;
        }


        h1 {
            color: #74896F;
            font-size: 17px;
            font-weight: bold;
            letter-spacing: 6px;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 300;
            color: black;
        }

        ul {
            color: black;
            font-weight: 300;
            font-size: 20px;
            list-style-type: none;
            margin: -20px 0 0 0;
            padding: 0;
        }

        .button {
            font: bold 11px Arial;
            text-decoration: none;
            background-color: #74896F;
            color: white;
            padding: 2px 6px 2px 6px;
            border-radius: 5px;
            border: 1px solid black;
            text-transform: uppercase;
        }

        #subscribe-result p {
            margin-top: 35px;
        }

        @media only screen and (max-device-width: 480px) {
            .img-responsive {
                width: 30%;
            }
        }
    </style>
</head>
<body style="background: #B8A283; color: white">
<div class="wrapper">
    <div class="box">
        <a class="navbar-brand text-primary" href="http://www.michelleandkeaton.com" target="_blank">
             <img  class="d-none d-lg-block navbar-brand__img img-responsive" src="cid:logo" alt="logo"  width="200"/>
</a>
        <h1>RSVP Confirmation</h1>
        <p style="padding: 20px;">Thank you for your RSVP to <br>Michelle & Keaton's wedding!<br><br>
        <hr>
        <br><br>
        <h1>Welcome Party</h1>
        <p><strong>Location</strong><br>
            Royalton Riviera Cancún<br><br>
            <strong>Wednesday, August 21, 2024</strong><br>
            6:00pm - 7:00pm<br>
            ${dynamicAttendingOneText}${dynamicNotAttendingOneText}<br><br>
        </p>
                <hr>
        <br><br>
        <h1>Wedding</h1>
        <p><strong>Location</strong><br>
            Jardín Del Mar<br><br>
            <strong>Thursday, August 22, 2024</strong><br>

            5:00pm - 1:00am<br>
            ${dynamicAttendingTwoText}${dynamicNotAttendingTwoText}<br><br>
        <br><br>
        <a style="padding: 10px; color: white;" href="http://www.michelleandkeaton.com" class="button" target="_blank">View Their Website</a>
        <br><br>
    </div>
</body>

</html>
  `
  }

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
      };
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
}

function getDynamicText(length, data, attending) {
  if (length == 0)
    return ''

  let dynamicText = `<p style="text-decoration:underline;">`
  dynamicText += attending? 'Attending' : 'Not Attending'
  dynamicText += '</p><ul>'

  for (person of data) {
    dynamicText += '<li>' + person.full_name + '</li>'
  }
  dynamicText += '</ul>'
  return dynamicText
}
