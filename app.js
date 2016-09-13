var cup = {
  full: false,
  temp: 'cold',
  fill: function() {
    this.full = true
    this.temp = 'hot'
    console.log('You filled it')
    return
  },
  drink: function() {
    if (this.temp === 'hot') {
      console.log("It's too Hot!! Cool it.");
      return;
    } else if (this.full === false) {
      console.log("It's empty, fill it!")
      return;
    }
    this.full = false
    console.log('You drank it')
    return;
  },
  cool:function() {
    if (this.temp === 'hot') {
      this.temp = 'warm'
      console.log("It's cool now")
      return
    }
    this.temp = 'cold'
  }
}

cup.drink()
cup.fill()
cup.drink()
cup.cool()
cup.drink()
