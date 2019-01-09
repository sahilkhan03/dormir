$(document).ready(function() {
  $('.timepicker').timepicker();
});
$('#so').css('opacity', '0');
$('#wake').on('click', function() {
  $('.myb').fadeOut('400', function() {
    $('#txt').hide();
    $('.myb').hide();
    $('.inp').show();
  });
$('#ask').text('I have to sleep at :');
  $('.inp').css('opacity', '100');

  $('#calc').on('click', function() {
    let val = $('#time').val();
    if (val == "") {
      swal("Error", "No Time Selected", "error");
    } else {
      let a1 = (Number(val[0]) * 10 + Number(val[1]));
      a1 += 9;
      if (a1 == 12) {
        a1 = a1.toString();
        a1 = a1 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a1 += 'AM';
        else {
          a1 += 'PM';
        }
      } else if (Number(a1) > 12) {
        a1 -= 12;
        a1 = a1.toString();
        a1 = a1 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a1 += 'AM';
        else {
          a1 += 'PM';
        }
      } else {
        a1 = a1.toString();
        a1 += val[2] + val[3] + val[4] + val[5] + val[6] + 'M';
      }
      let a2 = (Number(val[0]) * 10 + Number(val[1]));
      a2 += 7;
      let a22 = (Number(val[3]) * 10 + Number(val[4]));
      a22 += 30;
      if (a22 >= 60) {
        a22 -= 60;
        a2++;
      }
      a22 = a22.toString();
      if (Number(a22) < 10)
        a22 = '0' + a22;
      if (a2 == 12) {
        a2 = a2.toString();
        a2 = a2 + val[2] + a22 + val[5];
        if (val[6] == 'P')
          a2 += 'AM';
        else {
          a2 += 'PM';
        }
      } else if (Number(a2) > 12) {
        a2 -= 12;
        a2 = a2.toString();
        a2 = a2 + val[2] + a22 + val[5];
        if (val[6] == 'P')
          a2 += 'AM';
        else {
          a2 += 'PM';
        }
      } else {
        a2 = a2.toString();
        a2 += val[2] + a22 + val[5] + val[6] + 'M';
      }
      let a3 = (Number(val[0]) * 10 + Number(val[1]));
      a3 += 6;
      if (a3 == 12) {
        a3 = a3.toString();
        a3 = a3 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a3 += 'AM';
        else {
          a3 += 'PM';
        }
      } else if (Number(a3) > 12) {
        a3 -= 12;
        a3 = a3.toString();
        a3 = a3 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a3 += 'AM';
        else {
          a3 += 'PM';
        }
      } else {
        a3 = a3.toString();
        a3 += val[2] + val[3] + val[4] + val[5] + val[6] + 'M';
      }
      let a4 = (Number(val[0]) * 10 + Number(val[1]));
      a4 += 4;
      let a44 = (Number(val[3]) * 10 + Number(val[4]));
      a44 += 30;
      if (a44 >= 60) {
        a44 -= 60;
        a4++;
      }
      a44 = a44.toString();
      if (Number(a44) < 10)
        a44 = '0' + a44;
      if (a4 == 12) {
        a4 -= 12;
        a4 = a4.toString();
        a4 = a4 + val[2] + a44 + val[5];
        if (val[6] == 'P')
          a4 += 'AM';
        else {
          a4 += 'PM';
        }
      } else if (Number(a4) > 12) {
        a4 -= 12;
        a4 = a4.toString();
        a4 = a4 + val[2] + a44 + val[5];
        if (val[6] == 'P')
          a4 += 'AM';
        else {
          a4 += 'PM';
        }
      } else {
        a4 = a4.toString();
        a4 += val[2] + a44 + val[5] + val[6] + 'M';
      }
      $('.a1').text(a1 + " *");
      $('.a2').text(a2);
      $('.a3').text(a3);
      $('.a4').text(a4);
      $('.ans').show();
      $('.inp').fadeOut('400', function() {
        $(this).hide();
        $('#so').css('opacity', '1');
      });
      $('#so').show();
    }
  });
});
$('#sleep').on('click', function() {
  $('.myb').fadeOut('400', function() {
    $('.myb').hide();
    $('#txt').hide();
    $('.inp').show();
  });$('#ask').text('I have to wake up at :');
  $('.inp').css('opacity', '100');
  $('#calc').on('click', function() {
    let val = $('#time').val();
    if (val == "") {
      swal("Error", "No Time Selected", "error");
    } else {
      let a1 = (Number(val[0]) * 10 + Number(val[1]));
      a1 -= 9;
      if (a1 == 0) {
        a1 += 12;
        a1 = a1.toString();
        a1 = a1 + val[2] + val[3] + val[4] + val[5] + val[6] + val[7];
      } else if (Number(a1) < 1) {
        a1 += 12;
        a1 = a1.toString();
        a1 = a1 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a1 += 'AM';
        else {
          a1 += 'PM';
        }
      } else {
        a1 = a1.toString();
        a1 += val[2] + val[3] + val[4] + val[5] + val[6] + 'M';
      }
      let a2 = (Number(val[0]) * 10 + Number(val[1]));
      a2 -= 7;
      let a22 = (Number(val[3]) * 10 + Number(val[4]));
      console.log(a22);
      a22 -= 30;
      if (a22 < 0) {
        a22 += 60;
        a2--;
      }
      a22 = a22.toString();
      if (Number(a22) < 10)
        a22 = '0' + a22;
      if (a2 == 0) {
        a2 += 12;
        a2 = a2.toString();
        a2 = a2 + val[2] + a22 + val[5] + val[6] + val[7];
      } else if (Number(a2) < 1) {
        a2 += 12;
        a2 = a2.toString();
        a2 = a2 + val[2] + a22 + val[5];
        if (val[6] == 'P')
          a2 += 'AM';
        else {
          a2 += 'PM';
        }
      } else {
        a2 = a2.toString();
        a2 += val[2] + a22 + val[5] + val[6] + 'M';
      }
      let a3 = (Number(val[0]) * 10 + Number(val[1]));
      a3 -= 6;
      if (a3 == 0) {
        a3 += 12;
        a3 = a3.toString();
        a3 = a3 + val[2] + val[3] + val[4] + val[5] + val[6] + val[7];
      } else if (Number(a3) < 1) {
        a3 += 12;
        a3 = a3.toString();
        a3 = a3 + val[2] + val[3] + val[4] + val[5];
        if (val[6] == 'P')
          a3 += 'AM';
        else {
          a3 += 'PM';
        }
      } else {
        a3 = a3.toString();
        a3 += val[2] + val[3] + val[4] + val[5] + val[6] + 'M';
      }
      let a4 = (Number(val[0]) * 10 + Number(val[1]));
      a4 -= 4;
      let a44 = (Number(val[3]) * 10 + Number(val[4]));
      a44 -= 30;
      if (a44 < 0) {
        a44 += 60;
        a4--;
      }
      a44 = a44.toString();
      if (Number(a44) < 10)
        a44 = '0' + a44;
      if (a4 == 0) {
        a4 += 12;
        a4 = a4.toString();
        a4 = a4 + val[2] + a44 + val[5] + val[6] + val[7];
      } else if (Number(a4) < 1) {
        a4 += 12;
        a4 = a4.toString();
        a4 = a4 + val[2] + a44 + val[5];
        if (val[6] == 'P')
          a4 += 'AM';
        else {
          a4 += 'PM';
        }
      } else {
        a4 = a4.toString();
        a4 += val[2] + a44 + val[5] + val[6] + 'M';
      }
      $('.a1').text(a1 + " *");
      $('.a2').text(a2);
      $('.a3').text(a3);
      $('.a4').text(a4);
      $('.ans').show();
      $('.inp').fadeOut('400', function() {
        $(this).hide();
        $('#so').css('opacity', '1');
      });
      $('#so').show();
    }
  });
});
$('#so').on('click', function() {
  $('.ans').hide('0');
  $('#so').hide('0');
  $('.myb').show();
  $('#txt').show();
});
