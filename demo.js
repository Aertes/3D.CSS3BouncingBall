


$('.flash').each(function () {
    var _this = $(this);
    var html = $('<div class="content"><p>指标：生源质量得分</p><p>数据：74.3</p><p>排名：123</p></div>');
    _this.on('mouseenter', function () {
        _this.append(html);
    });
    _this.on('mouseleave', function () {
       _this.children('.content').remove();
    }) 
})

