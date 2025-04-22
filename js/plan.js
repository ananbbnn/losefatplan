document.addEventListener('DOMContentLoaded',function(){
    const formEl = document.querySelector("#plan-form");
    if(formEl){
        formEl.addEventListener('submit',function(event){
            event.preventDefault();// 防止表單提交重新載入頁面
            // 獲取表單資料
            const formData = new FormData(formEl);
            // 將表單資料轉換為JSON格式
            const jsonData = {};
            console.log(formEl);
            formData.forEach(function(value,key){
                jsonData[key] = value;
            });
            // 將JSON資料存儲在Local Storage中
            localStorage.setItem('fromData',JSON.stringify(jsonData));
        
            alert('表單資料已儲存至Local Storage');
        });
    }
})



// 監聽表單提交事件

