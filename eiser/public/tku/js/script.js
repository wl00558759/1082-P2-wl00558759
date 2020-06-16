const demoList = document.getElementById('demo-list');
const demo = document.getElementById('demo');

const showDemoList = item => {
  demoList.classList = 'visible';
  demo.classList = 'invisible';
};

const showDemo = item => {
  demoList.classList = 'invisible';
  demo.classList = 'visible';
  demo.style.marginTop = '100px';
  switch (item) {
    case 'intro':
      demo.innerHTML = `
        <iframe src="/w1/intro.html" height="700px" width=100% ></iframe>
      `;
      break;
    case 'imageGallery':
      demo.innerHTML = `
        <iframe src="/w2/imageGallery.html" height="900px" width=100% ></iframe>
      `;
      break;
    case 'div_demo':
      demo.innerHTML = `
        <iframe src="/w3/div.html" height="700px" width=100% ></iframe>
      `;
      break;
      case 'div_demo2':
      demo.innerHTML = `
        <iframe src="/w4/div_tku60.html" height="700px" width=100% ></iframe>
      `;
      break;
      case 'Github':
      demo.innerHTML = `
        <iframe src="/Github/index.html" height="700px" width=100% ></iframe>
      `;
      break;
      case 'My classes':
        demo.innerHTML = `
          <iframe src="/My classs/index.html" height="700px" width=100% ></iframe>
        `;
        break;
        case 'My resume':
          demo.innerHTML = `
            <iframe src="/My resume/index.html" height="700px" width=100% ></iframe>
          `;
          break;
  }
};
