namespace NineYi.Mall.FrontEnd.SDK {
	/**
	 * 官網APP導下載Download App Banner
	 */
	 export class DownloadAppBanner {
		// 版號
		public Version: string = "1.0.0";
		// 官網主址
		public Domain: string = "http://shop.s3.com.tw/";
		// 商店Icon路徑
		public ShopIconUrl: string = "https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027";
		// 商店Id
		public ShopId: string = "156";
		// App名稱
		public AppName: string = "美妝保養專賣";
		// 是否手機裝置
		public IsMobile: boolean = false;
		// 是否顯示（預設為顯示）
		public IsShow: boolean = true;
		// 下載網址
		public DownlaodAppUrl: string = "";

		constructor() {

			this.IsMobile = this.GetIsMobileBrowser();

			this.IsShow = !window.sessionStorage.getItem("AdHide");

			this.DownlaodAppUrl = this.Domain + "ref/" + this.ShopId + "/ShopHome/" + this.ShopId + "?utm_source=mweb&utm_medium=download_banner&utm_campaign=ShopHome";

			if(this.IsMobile){

				this.LoadFontawesome();

				this.AddpendBanner();

				if (this.IsShow) {

					this.ModifyHeaderMobileStyle(false);

					window.addEventListener('scroll', () => {
						var scrollY = window.scrollY;
						// console.log("scrollY:",scrollY);
						if (scrollY > 130) {
							this.ModifyHeaderMobileStyle(true);
						} else {
							this.ModifyHeaderMobileStyle(false);
						}
					});
				} else {
					document.getElementById("smart-app-banner").style.display = "none";
				}
			}
		}

		/**
		 * 取得是否手機瀏覽器
		 * @returns {boolean}
		 */
		public GetIsMobileBrowser(): boolean {
			var check = false;
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				check = true;
			}
			return check;
		}

		/**
		 * 外部載入Fontawsome使用icon
		 */
		private LoadFontawesome(): void {
			var headID = document.getElementsByTagName("head")[0];
			var newCss = document.createElement('link');
			newCss.type = 'text/css';
			newCss.rel = "stylesheet";
			newCss.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
			headID.appendChild(newCss);
		}

		/**
		 * 修改第三方header style，目前針對小三美日操作
		 * @param fixed
		 */
		private ModifyHeaderMobileStyle(fixed:boolean): void {
			var header_mobile_top = document.getElementById("header_mobile_top");
			var header_mobile_bottom = document.getElementById("header_mobile_bottom");
			if(fixed){
				if(header_mobile_top){
					header_mobile_top.style.position = "fixed";
				}
				if(header_mobile_bottom){
					header_mobile_bottom.style.marginTop = "130";
				}
			} else {
				if(header_mobile_top){
					header_mobile_top.style.position = "relative";
				}
				if(header_mobile_bottom){
					header_mobile_bottom.style.marginTop = "0";
				}
			}
		}

		/**
		 * 加入手機App下載版位
		 */
		public AddpendBanner(): void {
			var smart_app_banner = document.createElement('div');
			smart_app_banner.id = "smart-app-banner";
			smart_app_banner.style.position = "relative";
			// Todo 之後拉出html template 及 scss
			var bannerHtml = '<div class="smart-app-banner" style="background-color:#f8f8f8;color:#595959;position:static;border-bottom:1px solid #dfdfdf;height:145px;">'+
								 '<div class="banner-container" style="margin:0 auto;padding:35px;">'+
									 '<div class="banner-content" style="cursor:pointer;position:relative;font-family:PingFang-SC,sans-serif;">'+
										 '<a class="banner-close-btn" href="javascript: downloadApp.CloseBanner()" style="font-size:30px;color:#595959;margin-right:40px;"><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>'+
										 '<img class="banner-shop-icon" src="https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027" style="display:inline-block;vertical-align:middle;border-radius:7px;width:100px;height:100px;margin-top:-30px;">'+
										 '<span class="banner-body" style="display:inline-block;vertical-align:middle;padding:0 40px 25px;font-size:50px;width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+
										 	'<a class="banner-name" target="_blank" href="javascript: downloadApp.Download()" style="display:block;font-family:PingFang-SC,sans-serif;font-size:35px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-decoration:none">'+this.AppName+'</a>'+
										 	'<a class="banner-desc" style="display:block;font-size:35px;color:#b7b7b7;text-decoration:none">立刻使用官方APP</a>'+
										 '</span>'+
										 '<div class="banner-download-btn" style="width:160px;height:75px;line-height:70px;border-radius:3px;border:solid 1px #595959;position:absolute;right:0;top:2px;text-align:center;">'+
										 	'<a class="banner-download-btn-text" href="javascript: downloadApp.Download()" style="color:#595959;font-family:PingFang-SC,sans-serif;font-size:40px;text-decoration:none">下載</a>'+
									 	 '</div>'+
								 	 '</div>'+
								 '</div>'+
							 '</div>';
			smart_app_banner.innerHTML = bannerHtml;
			if(document.body) {
				document.body.insertBefore(smart_app_banner,document.body.childNodes[0]);
			}
		}

		/**
		 * 關閉手機App下載版位
		 */
		public CloseBanner(): void {
			this.IsShow = false;
			document.getElementById("smart-app-banner").style.display = "none";
			window.sessionStorage.setItem("AdHide", 'ture');
		}

		/**
		 * 點擊下載按鈕處理
		 */
		public Download(): void {
			window.open(this.DownlaodAppUrl, "_blank");
		}
	}
}

var downloadApp = new NineYi.Mall.FrontEnd.SDK.DownloadAppBanner();


