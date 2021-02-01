// Toast function
function toast({ title = "", message = "", type = "", duration = 3000 }) {
      //duration => độ delay,hiện ra bao lâu mới ẩn đi
      const main = document.getElementById("toast");
      if (main) {
        // tạo thẻ div trong toast
        const toast = document.createElement("div");
    
        // Auto remove toast -- gỡ hẳn đi sau thời gian delay chứ không ẩn
        const autoRemoveId = setTimeout(function () {
          main.removeChild(toast);
        }, duration + 1000); //+1000 là nó ẩn từ từ sau 1s 
    
        // Remove toast when clicked, target: cái nào nó click vào, closest(): tìm đúng giá trị trong ()
        toast.onclick = function (e) {
          if (e.target.closest(".toast__close")) {
            main.removeChild(toast);
            clearTimeout(autoRemoveId); //nếu click close thì kh oo chayj auto remove nữa
          }
        };
        const icons = {
          success: "fas fa-check-circle",
          info: "fas fa-info-circle",
          warning: "fas fa-exclamation-triangle",
          error: "fas fa-times"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
    
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
      // trượt từ ngoài vào trái - từ từ - 0.3s, ẩn đi - từ từ - mờ trong 1s - sau daylay s bắt đầu mờ - dừng luôn tại đây không hiện nữa
  
        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
        main.appendChild(toast); //đưa vào main
      }
    }
    