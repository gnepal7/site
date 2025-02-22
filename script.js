document.querySelector('.download-btn').addEventListener('click', function () {
    const cvElement = document.querySelector('.cv-container');

    // PDF Options
    const options = {
        margin: [5, 5, 5, 5],  // Reduce margins
        filename: 'Gopal_Nepal_CV.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1.2 },  // Adjust scale for better fit
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().from(cvElement).set(options).save();
});

