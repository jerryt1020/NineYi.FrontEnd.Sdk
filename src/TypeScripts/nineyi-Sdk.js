var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var FrontEnd;
        (function (FrontEnd) {
            var SDK;
            (function (SDK) {
                var DownloadAppBanner = (function () {
                    function DownloadAppBanner() {
                        var _this = this;
                        this.Version = "1.0.0";
                        this.Domain = "http://shop.s3.com.tw/";
                        this.ShopIconUrl = "https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027";
                        this.ShopId = "156";
                        this.AppName = "美妝保養專賣";
                        this.IsMobile = false;
                        this.IsShow = true;
                        this.DownlaodAppUrl = "";
                        this.IsMobile = this.GetIsMobileBrowser();
                        this.IsShow = !window.sessionStorage.getItem("AdHide");
                        this.DownlaodAppUrl = this.Domain + "ref/" + this.ShopId + "/ShopHome/" + this.ShopId + "?utm_source=mweb&utm_medium=download_banner&utm_campaign=ShopHome";
                        if (this.IsMobile) {
                            this.LoadFontawesome();
                            this.AddpendBanner();
                            if (this.IsShow) {
                                this.ModifyHeaderMobileStyle(false);
                                window.addEventListener('scroll', function () {
                                    var scrollY = window.scrollY;
                                    if (scrollY > 130) {
                                        _this.ModifyHeaderMobileStyle(true);
                                    }
                                    else {
                                        _this.ModifyHeaderMobileStyle(false);
                                    }
                                });
                            }
                            else {
                                document.getElementById("smart-app-banner").style.display = "none";
                            }
                        }
                    }
                    DownloadAppBanner.prototype.GetIsMobileBrowser = function () {
                        var check = false;
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            check = true;
                        }
                        return check;
                    };
                    DownloadAppBanner.prototype.LoadFontawesome = function () {
                        var headID = document.getElementsByTagName("head")[0];
                        var newCss = document.createElement('link');
                        newCss.type = 'text/css';
                        newCss.rel = "stylesheet";
                        newCss.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
                        headID.appendChild(newCss);
                    };
                    DownloadAppBanner.prototype.ModifyHeaderMobileStyle = function (fixed) {
                        var header_mobile_top = document.getElementById("header_mobile_top");
                        var header_mobile_bottom = document.getElementById("header_mobile_bottom");
                        if (fixed) {
                            if (header_mobile_top) {
                                header_mobile_top.style.position = "fixed";
                            }
                            if (header_mobile_bottom) {
                                header_mobile_bottom.style.marginTop = "130";
                            }
                        }
                        else {
                            if (header_mobile_top) {
                                header_mobile_top.style.position = "relative";
                            }
                            if (header_mobile_bottom) {
                                header_mobile_bottom.style.marginTop = "0";
                            }
                        }
                    };
                    DownloadAppBanner.prototype.AddpendBanner = function () {
                        var smart_app_banner = document.createElement('div');
                        smart_app_banner.id = "smart-app-banner";
                        smart_app_banner.style.position = "relative";
                        var bannerHtml = '<div class="smart-app-banner" style="background-color:#f8f8f8;color:#595959;position:static;border-bottom:1px solid #dfdfdf;height:145px;">' +
                            '<div class="banner-container" style="margin:0 auto;padding:35px;">' +
                            '<div class="banner-content" style="cursor:pointer;position:relative;font-family:PingFang-SC,sans-serif;">' +
                            '<a class="banner-close-btn" href="javascript: downloadApp.CloseBanner()" style="font-size:30px;color:#595959;margin-right:40px;"><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>' +
                            '<img class="banner-shop-icon" src="https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027" style="display:inline-block;vertical-align:middle;border-radius:7px;width:100px;height:100px;margin-top:-30px;">' +
                            '<span class="banner-body" style="display:inline-block;vertical-align:middle;padding:0 40px 25px;font-size:50px;width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' +
                            '<a class="banner-name" target="_blank" href="javascript: downloadApp.Download()" style="display:block;font-family:PingFang-SC,sans-serif;font-size:35px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-decoration:none">' + this.AppName + '</a>' +
                            '<a class="banner-desc" style="display:block;font-size:35px;color:#b7b7b7;text-decoration:none">立刻使用官方APP</a>' +
                            '</span>' +
                            '<div class="banner-download-btn" style="width:160px;height:75px;line-height:70px;border-radius:3px;border:solid 1px #595959;position:absolute;right:0;top:2px;text-align:center;">' +
                            '<a class="banner-download-btn-text" href="javascript: downloadApp.Download()" style="color:#595959;font-family:PingFang-SC,sans-serif;font-size:40px;text-decoration:none">下載</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        smart_app_banner.innerHTML = bannerHtml;
                        if (document.body) {
                            document.body.insertBefore(smart_app_banner, document.body.childNodes[0]);
                        }
                    };
                    DownloadAppBanner.prototype.CloseBanner = function () {
                        this.IsShow = false;
                        document.getElementById("smart-app-banner").style.display = "none";
                        window.sessionStorage.setItem("AdHide", 'ture');
                    };
                    DownloadAppBanner.prototype.Download = function () {
                        window.open(this.DownlaodAppUrl, "_blank");
                    };
                    return DownloadAppBanner;
                }());
                SDK.DownloadAppBanner = DownloadAppBanner;
            })(SDK = FrontEnd.SDK || (FrontEnd.SDK = {}));
        })(FrontEnd = Mall.FrontEnd || (Mall.FrontEnd = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var downloadApp = new NineYi.Mall.FrontEnd.SDK.DownloadAppBanner();
