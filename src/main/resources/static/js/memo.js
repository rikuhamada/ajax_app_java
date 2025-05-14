function post (){
  const submit =document.getElementById("submit")

  // submit.addEventListener("click", function(){　※アロー関数タイプのあれ
    // e は「投稿ボタンをクックした」という情報を持ったオブジェクト
    submit.addEventListener("click", (e) => {
      // イベント発生後は優先してJSが処理されpreventがある場合はイベントによるデフォルトの挙動
      // HTMLのthによるリクエスト送信は作動しなくなる
      // イベントの発火の事実を隠滅する感じ
      e.preventDefault()
      const form = document.getElementById("form")
      // フォームに入力されたデータの取得 form要素を格納したformを格納
      const formData = new FormData(form)
      // JSがサーバーにHTTP通信をおこなうときに利用するオブジェクト
      // HTML→ JS → （サーバー） → コントローラー
      const XHR = new XMLHttpRequest()
      // .ope(HTTPメソッド、パス、非同期のon/off)
      // "/posts"コントローラーの呼び出し HTMLのリクエストと一緒
      // レスポンスの値を指定しているためリダイレクトは取得できるが実行しない
      // JS「CTRの言うことは聞くだけ！」「実際にどうするかはオレが決める！」状態
      XHR.open("POST", "/posts", true)
      // レスポンスとして返してもらう値の形式をあらかじめ指定
      XHR.responseType = "json"
      // リクエストの送信
      XHR.send(formData)
  })

};

window.addEventListener('load', post);