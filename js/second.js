class Second {
  constructor() {
    this.clearfix();
    this.Bottom();
  }


  async clearfix() {
    this.$('#navi li').forEach((e, v) => {
      let nav = this;
      e.onmouseleave = function () {
        nav.$('.content').style.display = 'none';
        nav.$('.content>div')[v].style.display = 'none';
      }
      e.onmouseenter = function () {
        nav.$('.content').style.display = 'block';
        nav.$('.content>div')[v].style.display = 'block';
      }
      // console.log(this.$('.content>div'));
      // console.log(this.$('.nav'));
    });
  }

  async Bottom() {
    // console.log(this.$('#fix'));
    this.$('.nav #fix').forEach((e, k) => {
      let d = this
      e.onmouseleave = function () {
        d.$('.dropdown-layer')[k].style.display = 'none';
      }
      e.onmouseenter = function () {
        d.$('.dropdown-layer')[k].style.display = 'block';
      }
    })
  }

  //获取节点
  $(tag) {
    let res = document.querySelectorAll(tag);
    return res.length == 1 ? res[0] : res;
  }
}
new Second;