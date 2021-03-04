import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var animationTime = 5,
      days = 7;

    $(document).ready(function () {

      // timer arguments: 
      //   #1 - time of animation in mileseconds, 
      //   #2 - days to deadline

      $('#progress-time-fill, #death-group').css({ 'animation-duration': animationTime + 's' });

      var deadlineAnimation = function () {
        setTimeout(function () {
          $('#designer-arm-grop').css({ 'animation-duration': '0.525s' });
        }, 0);

        setTimeout(function () {
          $('#designer-arm-grop').css({ 'animation-duration': '0.35s' });
        }, 4000);

        setTimeout(function () {
          $('#designer-arm-grop').css({ 'animation-duration': '0.245s' });
        }, 8000);

        setTimeout(function () {
          $('#designer-arm-grop').css({ 'animation-duration': '0.105s' });
        }, 12000);

        setTimeout(function () {
          $('#designer-arm-grop').css({ 'animation-duration': '0.07s' });
        }, 15000);
      };

      function timer(totalTime: any, deadline: any) {
        var time = totalTime * 1000;
        var dayDuration = time / deadline;
        var actualDay = deadline;

        var timer = setInterval(countTime, dayDuration);

        function countTime() {
          --actualDay;
          $('.deadline-days .day').text(actualDay);

          if (actualDay == 0) {
            clearInterval(timer);
            $('.deadline-days .day').text(deadline);
          }
        }
      }

      var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + " " + '</div></div>';
        $el.html(html);
      }

      deadlineText();

      deadlineAnimation();
      timer(animationTime, days);

      setInterval(function () {
        timer(animationTime, days);
        deadlineAnimation();

        // console.log('begin interval', animationTime * 1000);

      }, animationTime * 1000);

    });

  }

}
