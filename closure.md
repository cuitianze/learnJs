var Book = (function() {
	// Private static attributes
	var numOfBooks = 0; //静态属性，跟踪调用次数

	// Private static method
	function checkIsbn(isbn) {
		///
	}
  // 私有方法，实例不会生成一个新副本

	// Return the constructor
	return function(newIsbn, newTitle, newAuthor) { // implements Publication
		// Private attricutes
		var isbn, title, author;

		//Pricileged methods
		this.getIsbn = function() {
			return isbn;
		};
		this.setIsbn = function(newIsbn) {
			if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN');
			isbn = newIsbn;
		}
		// Constructor
		numOfBooks++;
		if(numOfBooks>50) throw Error('Book: Only 50 instances of Book can be created');
		this.setIsbn(newIsbn);
	}	// 返回的内嵌函数形成了闭包，把静态的私有属性声明在里面
})(); // 用于外层函数声明的一对括号，使代码一载入就执行函数，而不是在调用Book构造函数时


// 私用的静态成员可以从构造器内部访问，意味着所有的私用函数和特权函数都能访问它们。
// 静态方法被声明在构造器之外，在内存中只会存放一份，不是特权方法，不能访问任何定义在构造器中的私用属性。
// 定义在构造函数内的私用方法能够调用那些私用静态方法。反之则不然。

// 要判断一个私用方法是否应该被设计为静态方法，看它是否需要访问任何实例数据
// 如果不需要，设计为静态方法更有效率，因为只会被创建一份

