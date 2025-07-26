function downloadPDF() {
    const element = document.querySelector('.container-lg');

    const opt = {
        margin: [15, 2, 35 , 3],  // [arriba, izquierda, abajo, derecha] en mm
        filename: 'CV Hernán Darío Castañeda Arango.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'letter',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save();
}


    /*async function downloadPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter' // Tamaño carta: 612 x 792 puntos
      });

      const contenido = document.getElementById("container-lg");

      await doc.html(contenido, {
        callback: function (doc) {
          doc.save("CV Hernán Darío Castañeda Arango.pdf");
        },
        x: 20,
        y: 20
      });
    }*/
