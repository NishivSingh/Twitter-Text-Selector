const articleContainer = document.querySelector('.article-container');

articleContainer.addEventListener('mouseup', function(event) {
  const selectedText = window.getSelection().toString();

  if (selectedText.length > 0) {
    const menu = document.createElement('div');
    menu.id = 'custom-menu';

    const twitterButton = document.createElement('a');
    twitterButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`;
    twitterButton.target = '_blank';
    twitterButton.textContent = 'Share on Twitter';

    twitterButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(event.target.href, 'Share on Twitter', 'width=550,height=450');
      const ele = document.getElementById('custom-menu');
      ele.remove()
    });

    menu.appendChild(twitterButton);
    const container = event.target.closest('.article-container');

    container.appendChild(menu);
  }
});

