window.onload = function () {
    if (Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById("search-btn").addEventListener("click", function () {
        search();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById("top-right").addEventListener("click", function () {
        clickLogin();
    });

    var links = document.querySelectorAll('#top-left a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        if (href.indexOf('https://') === 0) {
            link.classList.add('https');
        }
    }

};

function search() {
    // TODO: 搜索触发后的行为
    console.log("");
    var input = document
        .getElementById("search-input")
        .querySelector("input").value;
    input = input.trim();
    if (input == "") alert("请输入搜索内容");
    else {
        var searchUrl = "https://www.baidu.com/s?wd=" + encodeURIComponent(input);
        window.location.href = searchUrl;
    }
}

function clickLogin() {
    if (!Kernal.isLogin()) {
        login();
    } else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"></span>
                    </div>`;
    document.getElementById("top-right").innerHTML = content;
    document.getElementById("name").innerText = username;

}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}
