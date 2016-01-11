1. mainContentsCollectionを定義する。modelプロパティを設定する
 + modelプロパティはMainContentsModelクラスを指定する
1. MainCompositeViewを定義する
 + templateビューのテンプレート
 + childView子ビューのクラス
 + childViewContainerに子ビューが割り当てられるビューのセレクター
 + childEvents (remove:rowイベントとonChildRemoveRowを紐付ける)
 + ui (リセットボタン(.btn-reset)を定義する)
 + events (リセットボタン押下とonClickBtnResetを紐付ける) 
 + onChildRemoveRow(定義済み)
 + onClickBtnReset(定義済み)
1. MainContentsRouterを定義する
 + showAllメソッドを実装する
 + データはuserDataを利用しMainContentsCollectionにデータを詰め込み
 + MainContentsCompositeViewををelに#main-contents,collectionに生成したコレクションをセットしてrenderする
