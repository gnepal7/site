document.querySelector('.download-btn').addEventListener('click', function () {
    // Select the CV container to convert to PDF
    const cvElement = document.querySelector('.cv-container');

    // PDF Options
    const options = {
        margin: 10,
        filename: 'Gopal_Nepal_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    // Convert and Download PDF
    html2pdf().from(cvElement).set(options).save();
});

