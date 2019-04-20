
function requestCommentsOne () {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1');
  request.send();

  request.onreadystatechange = (event) => {
    if (request.readyState === 4 && request.status === 200) {
      let response = JSON.parse(request.responseText);
      $('#comments-1').empty();
      $('#comments-1').append('<h3 id="comments-1-header">Comments</h3>');
      for (let i = 0; i < response.length; ++i) {
        let body = String(response[i].body);

        body = body.replace('\n', '<br>');

        $('#comments-1').append('<p data-comments="body">' + body + '</p>');
        $('#comments-1').append('<address data-comments="name">');
        $('#comments-1').append('<a data-comments="email" href=mailto:' + response[i].email + '>' + response[i].name);
        $('#comments-1').append('</a>');
        $('#comments-1').append('</address>');
      }
    }
  };
}

function requestCommentsTwo () {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=2');
  request.send();

  request.onreadystatechange = (event) => {
    if (request.readyState === 4 && request.status === 200) {
      let response = JSON.parse(request.responseText);
      $('#comments-2').empty();
      $('#comments-2').append('<h3 id="comments-2-header">Comments</h3>');
      for (let i = 0; i < response.length; ++i) {
        let body = String(response[i].body);
        body.replace('\n', '<br>');
        $('#comments-2').append('<p data-comments="body">' + body + '</p>');
        $('#comments-2').append('<address data-comments="name">');
        $('#comments-2').append('<a data-comments="email" href=mailto:' + response[i].email + '>' + response[i].email);
        $('#comments-2').append('</a>');
        $('#comments-2').append('</address>');
      }
    }
  };
}

(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);
    console.log(sectionSelector);
    console.log(commentSection);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
        if (event.target.value === '1') {
          if ($('#comments-1-header').length === 0) {
            requestCommentsOne();
          }
        } else if (event.target.value === '2') {
          if ($('#comments-2-header').length === 0) {
            requestCommentsTwo();
          }
        }
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
})(window);
