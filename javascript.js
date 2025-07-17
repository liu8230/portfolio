<!--在線諮詢--!>
<script type="text/javascript">
  // eBA
  
  function EBAOnload() {
    if (window.location.href.indexOf("cart") <=0 && window.location.href.indexOf("checkout") <=0 ) {
      
      //依照品牌設定以下租戶號碼：
      var tenantCode = "23991432-05"; //調整租戶號即可
      
      var marsId = "";
      //if (document.cookie.match(/dwac_(.+?);/)) {
        //     marsId = document.cookie.match(/dwac_(.+?);/)[1].split('|')[2];
        //};
        
        // GTM ID 確認
        if (window.google_tag_manager["GTM-PW98WG5"]) {
          
          marsId = window.google_tag_manager["GTM-PW98WG5"].dataLayer.get('uiLinkID') || "";
          
          var tag_hdr = document.getElementsByTagName("head")[0];
          var tag_script = document.createElement("script");
          
          tag_script.setAttribute("id", "WebChatEntryPlugIn");
          tag_script.setAttribute("type", "text/javascript");
          tag_script.setAttribute("src", "https://webchat.lorealuxe.com/yslwebchat/WebChatEntryRWD.js?tenantCode=" + tenantCode + "&marsId=" + marsId); // 調整品牌路徑 lanwebchat kiewebchat
          tag_hdr.appendChild(tag_script);
        };   
      }
    }
    
    // Loading eBA
    
    if (window.addEventListener) {
      window.addEventListener("load", EBAOnload, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", EBAOnload);
    } else {
      window.onload = EBAOnload;
    }
    
  </script> 
            </div>
        </div>
    </div>
    <div class="l-footer__middle">
        <div class="l-layout">
            <div class="l-footer__middle-inner l-grid--large">
                <div class="l-footer__nav">
                    
                    <span class="c-anchor h-show-for-sr" id="footer-nav" tabindex="-1">Footer navigation</span>
                    <div class="l-footer__nav-inner">
                          <!-- dwMarker="content" dwContentID="579c0383ee79174257eb18fbf5" -->