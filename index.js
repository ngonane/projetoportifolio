
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
});












document.querySelector("button").addEventListener("click", downloadPDF);
 
        function downloadPDF() {
            // Replace 'Curriculo.pdf' with the actual path to your PDF file
            const fileUrl = 'Curriculo.pdf';

            // Create a link element
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = 'curriculo.pdf'; // Specify the filename for the downloaded file

            // Append the link to the document body
            document.body.appendChild(link);

            // Trigger the click event on the link
            link.click();

            // Clean up
            document.body.removeChild(link);
        }



  
