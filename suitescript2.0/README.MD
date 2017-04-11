參考 : 

http://requirejs.org/docs/api.html
http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html
http://www.ruanyifeng.com/blog/2012/11/require_js.html

# aa
suitescript2.0語法採用 AMD


## CommonJS

2009年，美國程序員Ryan Dahl創造了node.js項目，將javascript語言用於服務器端編程。

這標誌"Javascript模塊化編程"正式誕生。因為老實說，在瀏覽器環境下，沒有模塊也不是特別大的問題，畢竟網頁程序的複雜性有限；但是在服務器端，一定要有模塊，與操作系統和其他應用程序互動，否則根本沒法編程。

node.js的模塊系統，就是參照CommonJS規範實現的。在CommonJS中，有一個全局性方法require()，用於加載模塊。假定有一個數學模塊math.js，就可以像下面這樣加載。

    　　var math = require('math');

然後，就可以調用模塊提供的方法：

    　　var math = require('math');

    　　math.add(2,3); // 5

## 瀏覽器環境
有了服務器端模塊以後，很自然地，大家就想要客戶端模塊。而且最好兩者能夠兼容，一個模塊不用修改，在服務器和瀏覽器都可以運行。

但是，由於一個重大的侷限，使得CommonJS規範不適用於瀏覽器環境。還是上一節的代碼，如果在瀏覽器中運行，會有一個很大的問題，你能看出來嗎？

    　　var math = require('math');

    　　math.add(2, 3);

第二行math.add(2, 3)，在第一行require('math')之後運行，因此必須等math.js加載完成。也就是說，如果加載時間很長，整個應用就會停在那裡等。

這對服務器端不是一個問題，因為所有的模塊都存放在本地硬盤，可以同步加載完成，等待時間就是硬盤的讀取時間。但是，對於瀏覽器，這卻是一個大問題，因為模塊都放在服務器端，等待時間取決於網速的快慢，可能要等很長時間，瀏覽器處於"假死"狀態。

因此，瀏覽器端的模塊，不能採用"同步加載"（synchronous），只能採用"異步加載"（asynchronous）。這就是AMD規範誕生的背景。

## AMD
AMD是"Asynchronous Module Definition"的縮寫，意思就是"異步模塊定義"。它採用異步方式加載模塊，模塊的加載不影響它後面語句的運行。所有依賴這個模塊的語句，都定義在一個回調函數中，等到加載完成之後，這個回調函數才會運行。

AMD也採用require()語句加載模塊，但是不同於CommonJS，它要求兩個參數：

    　　require([module], callback);

第一個參數[module]，是一個數組，裡面的成員就是要加載的模塊；第二個參數callback，則是加載成功之後的回調函數。如果將前面的代碼改寫成AMD形式，就是下面這樣：

    　　require(['math'], function (math) {

    　　　　math.add(2, 3);

    　　});

math.add()與math模塊加載不是同步的，瀏覽器不會發生假死。所以很顯然，AMD比較適合瀏覽器環境。

目前，主要有兩個Javascript庫實現了AMD規範：require.js和curl.js。
