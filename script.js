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

    // Get the bounding box of the selected text range
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Calculate the position of the menu relative to the selected text range
    const left = rect.left + articleContainer.scrollLeft;
    const top = rect.bottom + articleContainer.scrollTop;

    // Position the menu
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';

    document.body.appendChild(menu);
  }
});

