import nodemailer from "nodemailer";

export async function post({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Configuración del transporte (SMTP)
  const transporter = nodemailer.createTransport({
    service: "gmail", // Cambia esto si usas otro servicio
    auth: {
      user: process.env.EMAIL_USER, // Tu email (usando variables de entorno)
      pass: process.env.EMAIL_PASS, // Tu contraseña o contraseña de aplicación
    },
  });

  // Configuración del correo
  const mailOptions = {
    from: `"${name}" <${email}>`, // Remitente
    to: process.env.EMAIL_TO, // Tu email donde recibes los mensajes
    subject: "Nuevo mensaje desde el portafolio",
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado exitosamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el correo" }),
      { status: 500 }
    );
  }
}
