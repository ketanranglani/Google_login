function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $("login-box-content").css("display","none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have bee logged out");
      $("login-box-content").css("display","block");
      $(".data").css("display","none");
    });
  }