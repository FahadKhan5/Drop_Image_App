const dropArea = document.getElementById('dropArea');

// Prevent default behavior for drag events
dropArea.addEventListener('dragenter', preventDefault, false);
dropArea.addEventListener('dragover', preventDefault, false);
dropArea.addEventListener('dragleave', preventDefault, false);
dropArea.addEventListener('drop', preventDefault, false);

// Handle file drop
dropArea.addEventListener('drop', handleDrop, false);

function preventDefault(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  
  const files = event.dataTransfer.files;
  
  // Process each dropped file
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    // Only process image files
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const imagePreview = document.createElement('img');
        imagePreview.classList.add('image-preview');
        imagePreview.src = e.target.result;
        
        dropArea.appendChild(imagePreview);
      };
      
      reader.readAsDataURL(file);
    }
  }
}