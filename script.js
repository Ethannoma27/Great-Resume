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
    modalContent.style.maxWidth = '90%'; // 更好适应小屏设备
    modalContent.style.overflow = 'auto';  // 防止内容溢出
    modalContent.innerHTML = `
        <h2>添加微信联系</h2>
        <p>请扫码或添加我的微信号：</p>
        <p><strong>your_wechat_id</strong></p>
        <img src="https://raw.githubusercontent.com/ethannoma27/My-Resume-2/main/images/Qrcode.jpg" 
             alt="微信二维码" 
             style="width: 100%; max-width: 250px; height: auto; margin: 20px auto; display: block;">
        <button onclick="closeModal()" class="feedback-button">
            关闭
        </button>
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
    
    // 使用 IntersectionObserver 替代 scroll 监听
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 }); // 当 50% 可见时触发动画

    sections.forEach(section => observer.observe(section));
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

// CSS 样式改动
const style = document.createElement('style');
style.innerHTML = `
    .feedback-button {
        background-color: #1E3A8A !important; /* 宝蓝色 */
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .feedback-button:hover {
        background-color: #3b4e86; /* hover时的稍暗的宝蓝色 */
    }

    .feedback-button:focus,
    .feedback-button:active {
        outline: none;
        box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.6);  /* 添加焦点状态样式 */
    }

    /* 针对手机端优化 */
    @media (max-width: 768px) {
        .modal-content {
            max-width: 90%;
        }
        .feedback-button {
            padding: 8px 16px;
        }
    }
`;
document.head.appendChild(style);

// 新增：工作经验和核心能力与技能的编辑按钮功能

// 为工作经验和核心能力与技能的部分添加按钮，打开新的页面进行编辑
function createEditButton(sectionId, targetUrl) {
    const button = document.createElement('button');
    button.textContent = `编辑${sectionId}`;
    button.style.marginTop = '20px';
    button.onclick = function() {
        window.location.href = targetUrl; // 跳转到编辑页面
    };

    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        section.appendChild(button);
    }
}

// 创建工作经验编辑按钮
createEditButton('work-experience', 'work-experience.html');

// 创建核心能力与技能编辑按钮
createEditButton('skills', 'skills.html');

