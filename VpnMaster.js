
/******************************
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body VpnMaster.js
[mitm] 
hostname = buy.itunes.apple.com
*******************************/

var body = $response.body;
var obj = JSON.parse(body);
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1528940523,
    "app_item_id": 1528940523,
    "bundle_id": "com.hotspotvpn.super4-ios",
    "application_version": "257",
    "download_id": 501910211794548009,
    "version_external_identifier": 853135253,
    "receipt_creation_date": "2022-11-10 22:06:22 Etc/GMT",
    "receipt_creation_date_ms": "1668117982000",
    "receipt_creation_date_pst": "2022-11-10 14:06:22 America/Los_Angeles",
    "request_date": "2022-11-10 22:07:51 Etc/GMT",
    "request_date_ms": "1668118071406",
    "request_date_pst": "2022-11-10 14:07:51 America/Los_Angeles",
    "original_purchase_date": "2022-11-10 22:04:40 Etc/GMT",
    "original_purchase_date_ms": "1668117880000",
    "original_purchase_date_pst": "2022-11-10 14:04:40 America/Los_Angeles",
    "original_application_version": "257",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.hotspotvpn.proxymaster.weekly",
        "transaction_id": "110001486087718",
        "original_transaction_id": "110001486087718",
        "purchase_date": "2022-11-10 22:06:20 Etc/GMT",
        "purchase_date_ms": "1668117980000",
        "purchase_date_pst": "2022-11-10 14:06:20 America/Los_Angeles",
        "original_purchase_date": "2022-11-10 22:06:21 Etc/GMT",
        "original_purchase_date_ms": "1668117981000",
        "original_purchase_date_pst": "2022-11-10 14:06:21 America/Los_Angeles",
        "expires_date": "2099-11-13 22:06:20 Etc/GMT",
        "expires_date_ms": "9668377180000",
        "expires_date_pst": "2099-11-13 14:06:20 America/Los_Angeles",
        "web_order_line_item_id": "110000675072516",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.hotspotvpn.proxymaster.weekly",
      "transaction_id": "110001486087718",
      "original_transaction_id": "110001486087718",
      "purchase_date": "2022-11-10 22:06:20 Etc/GMT",
      "purchase_date_ms": "1668117980000",
      "purchase_date_pst": "2022-11-10 14:06:20 America/Los_Angeles",
      "original_purchase_date": "2022-11-10 22:06:21 Etc/GMT",
      "original_purchase_date_ms": "1668117981000",
      "original_purchase_date_pst": "2022-11-10 14:06:21 America/Los_Angeles",
      "expires_date": "2099-11-13 22:06:20 Etc/GMT",
      "expires_date_ms": "9668377180000",
      "expires_date_pst": "2099-11-13 14:06:20 America/Los_Angeles",
      "web_order_line_item_id": "110000675072516",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20702598"
    }
  ],
  "latest_receipt": "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",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.hotspotvpn.proxymaster.weekly",
      "product_id": "com.hotspotvpn.proxymaster.weekly",
      "original_transaction_id": "110001486087718",
      "auto_renew_status": "0"
    }
  ],
  "status": 0
}



body = JSON.stringify(obj);

$done({body});
