// 显示联系方式和二维码的弹窗
function showContactInfo() {
    // 创建弹出层
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    // 创建弹出框内容
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.textAlign = 'center';
    modalContent.style.maxWidth = '80%';
    modalContent.innerHTML = `
        <h2>添加微信联系</h2>
        <p>请扫码或添加我的微信号：</p>
        <p><strong>your_wechat_id</strong></p>
        <img src="path_to_your_qr_code_image.jpg" alt="微信二维码" style="width: 200px; height: 200px; margin: 20px auto; display: block;">
        <button onclick="closeModal()">关闭</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// 关闭弹窗
function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        modal.remove();
    }
}

// 打印简历功能
function printResume() {
    // 使用 window.print() 打印当前页面
    window.print();
}

// 动态加载页面内容（解决手机端看不到内容问题）
document.addEventListener('DOMContentLoaded', function () {
    // 动态显示每个 section 元素
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('animate');
            }
        });
    });

    // 检查元素是否出现在视口内
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});

// 模拟文件路径修正（此部分可根据实际情况修改）
function fixFilePaths() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http')) {
            // 如果图片路径不以 http 开头，自动修复为相对路径
            img.setAttribute('src', window.location.origin + '/' + src);
        }
    });
}

// 调用修正路径函数
fixFilePaths();
