function formvalidate() {
  //   alert("form đã chạy");
  //   return false;

  var result = true;

  var yourname = document.getElementById("yourname").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var time = document.getElementById("time").value;
  var petname = document.getElementById("petname").value;
  var sexual = document.getElementById("sexual").value;
  var age = document.getElementById("age").value;
  var kilo = document.getElementById("kilo").value;
  var notes = document.getElementById("notes").value;

  if (yourname.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("yourname_empty").style.display = "block";
    document.getElementById("yourname").style.display = "block";

    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("yourname_empty").style.display = "none";
    document.getElementById("yourname").style.display = "block";
  }

  if (phone.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("phone_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("phone_empty").style.display = "none";
  }

  if (address.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("address_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("address_empty").style.display = "none";
  }

  if (time.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("time_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("time_empty").style.display = "none";
  }

  if (petname.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("petname_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("petname_empty").style.display = "none";
  }

  if (sexual.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("sexual_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("sexual_empty").style.display = "none";
  }

  if (age.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("age_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("age_empty").style.display = "none";
  }

  if (kilo.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("kilo_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("kilo_empty").style.display = "none";
  }

  if (notes.length == 0) {
    // tên rỗng -> hiện thông báo lỗi
    document.getElementById("notes_empty").style.display = "block";
    result = false;
  } else {
    // ngược lại thì ẩn thông báo lỗi
    document.getElementById("notes_empty").style.display = "none";
  }

  return result;
}
