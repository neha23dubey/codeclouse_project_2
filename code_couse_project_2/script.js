function shortenUrl() {
  const input = document.getElementById('url-input');
  const url = input.value.trim();

  // Perform URL shortening logic here
  const shortenedUrl = generateShortUrl(url);

  // Display the shortened URL
  const linkInput = document.getElementById('shortened-link');
  linkInput.value = shortenedUrl;

  // Show the shortened URL section
  const shortenedUrlSection = document.getElementById('shortened-url');
  shortenedUrlSection.style.display = 'block';

  return false;
}

function generateShortUrl(url) {
  // Your URL shortening logic goes here
  // This is just a placeholder example
  return 'https://shortened-url.com/abc123';
}

function copyShortenedUrl() {
  const linkInput = document.getElementById('shortened-link');
  linkInput.select();
  document.execCommand('copy');

  // Update the button text after copying
  const copyButton = document.querySelector('#shortened-url button');
  copyButton.textContent = 'Copied!';
  setTimeout(function() {
    copyButton.textContent = 'Copy';
  }, 2000);
}
