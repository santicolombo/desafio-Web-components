const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const finalMessage = `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
`;

  try {
    const response = await fetch(
      "https://apx.school/api/utils/email-to-student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "santicolombo2908@gmail.com",
          message: finalMessage,
        }),
      }
    );

    if (response.ok) {
      status.textContent = "Mensaje enviado correctamente 🚀";
      form.reset();
    } else {
      status.textContent = "Error al enviar el mensaje 😢";
    }
  } catch (error) {
    status.textContent = "Error de conexión";
  }
});
