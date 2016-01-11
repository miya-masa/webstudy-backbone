1. .messageにメッセージを表示するshowMessageBehaviorを定義する
 + uiに.messageを指定する
 + ui.messageにメッセージを表示するonShowMessageを実装する
1. mainContentsCompositeViewにbehaviorsを設定する
 + showMessageBehaviorとしてbehaviorClassに定義したBehaviorクラスを指定
 + 削除後と保存後にbehaviorのメソッドを呼び出す。イベント名show:message
