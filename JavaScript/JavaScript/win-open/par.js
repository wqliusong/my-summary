// 用户查询_回调函数
function model_callback(date) {
    // 清空页面 ▼▼▼
    userInfo = null;
    $("#userid").val("");
    $("#utype").val("");
    $("#uname").val("");
    $("#productname").val("");
    $("#uaddr").val("");
    $("#servicestart").val("");
    $("#serviceend").val("");
    $("#servicestate").val("");
    $("#uother").html("");
    $("#crm_uname").val("");
    $("#crm_sex").val("");
    $("#crm_mobile").val("");
    $("#crm_mobile2").val("");
    $("#crm_mobile3").val("");
    $("#crm_uaddr").val("");
    $("#crm_other").html("");
    $("#crm_umark").val("");
    $("#crm_email").val("");
    $("#userCode").val("");
    // 社区
    $("#ushequ").val("");
    $("#communityCode").val("")
    // 服务站
    $("#servicehall").val("");
    $("#sellServiceHallCode").val("");
    // 大区
    $("#region").val("");
    $("#regionCode").val("");
    // 装维站
    $("#repairServiceHall").val("");
    $("#repairServiceHallCode").val("");
    // 清空页面 ▲▲▲

    // crm对象一定要有
    if (!date.user.crmUser) {
        gwbnsh_dialog.alert("提示信息", "未获取到crm信息,请重试", "error");
        return;
    }

    // 把data赋值到全局变量userInfo目的是userInfo里的电话号码是没打码的,画面上是打码的
    userInfo = date;

    // 有adsl用户信息
    if (date.adsl) {
        $("#userid").val(date.adsl.customerNo);
        $("#utype").val(date.adsl.customerType);
        $("#uname").val(date.adsl.customerName);
        $("#productname").val(date.adsl.customerPackage);
        $("#uaddr").val(date.adsl.customerAdress);
        if (date.adsl.customerPhone != '') {
            $("#crm_mobile").val(date.adsl.customerPhone.replace(date.adsl.customerPhone.substr(3, 4), "****"));
        }
        $("#crm_mobile2").val(date.adsl.customerTel != "" ? date.adsl.customerTel.replace(date.adsl.customerTel.substr(3, 4), "****") : "");
        $("#servicestart").val(date.adsl.serviceBeginDate);
        $("#serviceend").val(date.adsl.serviceEndDate);
        $("#servicestate").val(date.adsl.serviceState);

        $("#ushequ").val(date.adsl.community);
        $("#communityCode").val(date.adsl.communityCode)
        // 服务站
        $("#servicehall").val(date.adsl.sellServicehall);
        $("#sellServiceHallCode").val(date.adsl.sellServicehallCode);
        // 大区
        $("#region").val(date.adsl.bureau);
        $("#regionCode").val(date.adsl.regionCode);
        // 装维站
        $("#repairServiceHall").val(date.adsl.repairServicehall);
        $("#repairServiceHallCode").val(date.adsl.repairServicehallCode);

        // 无adsl,宽带账号、客户姓名、客户地址、登记号码可编辑
        if (date.adsl.customerNo == '') {
            $("#userid").removeAttr("readonly");
        } else {
            $("#userid").attr("readonly", "readonly");
        }
        if (date.adsl.customerName == '') {
            $("#uname").removeAttr("readonly");
        } else {
            $("#uname").attr("readonly", "readonly");
        }
        if (date.adsl.customerAdress == '') {
            $("#uaddr").removeAttr("readonly");
        } else {
            $("#uaddr").attr("readonly", "readonly");
        }
        if (date.adsl.customerPhone == '') {
            $("#crm_mobile").removeAttr("readonly");
        } else {
            $("#crm_mobile").attr("readonly", "readonly");
        }
    } else {
        $("#userid").removeAttr("readonly");
        $("#uname").removeAttr("readonly");
        $("#uaddr").removeAttr("readonly");
        $("#crm_mobile").removeAttr("readonly");
    }

    // crm信息赋值
    $("#crm_uname").val(date.user.crmUser.name);
    $("#crm_sex").val(date.user.crmUser.sex == 1 ? "女" : "男");
    $("#crm_mobile3").val(date.user.crmUser.phone.replace(date.user.crmUser.phone.substr(3, 4), "****"));
    $("#crm_uaddr").val(date.user.crmUser.addr);
    $("#crm_other").html(date.user.crmUser.remarks);
    $("#uother").html(date.user.crmUser.remarks);
    $("#crm_email").val(date.user.crmUser.email);
    $("#userCode").val(date.user.crmUser.userCode);

    var lables = "";
    if (date.user.lables != undefined && date.user.lables != null) {
        for (var i = 0; i < date.user.lables.length; i++) {
            if (i != 0) { lables += ","; }
            lables += date.user.lables[i];
        }
    }
    $("#crm_umark").val(lables);


    //如果从炎黄按钮点击过来的自动点击炎黄按钮
    if (btnYanHuang != "") {
        $(btnYanHuang).click();
    }

    // 刷新当前激活着的标签页
    $("li.active").each(function () {
        var str = $(this)[0].innerText;
        str = str.replace('\n', '');
        if ("新建工单套餐费用业务发票设备订单大麦卡券营业厅短信模板工单列表".indexOf(str) != -1) {
            $(this)[0].click();
        }
    });
}