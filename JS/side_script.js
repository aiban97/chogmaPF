function showSidebar() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.style.display = "flex";
    }

    function hideSidebar() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.style.display = "none";
    }

    let arrow = document.querySelectorAll(".arrow");

    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
      });
    }

    //NUMBER COUNTERS
    /*const counters = document.querySelectorAll(".stats-container span");
    const container = document.querySelector(".stats-container");
    let activated = false;

    window.addEventListener("scroll", () => {
      if(
        scrollX > container.scrollTop - container.scrollHeight - 0 && activated === false 
      ){
        counters.forEach(counter => {
          counter.innerText = 0;
          let count = 0;

          function updateCount() {
            const target = parseInt(counter.dataset.count);
            if(count < target){
              count++;
              counter.innerText = count;
              setTimeout(updateCount, 30);
            }else{
              counter.innerText = target;
            }
          }
          updateCount();
          activated = true;
        });
      } else if(
        scrollY < container.scrollTop - container.scrollHeight - 500 || scrollY === 0 && activated === true
      ){
        counters.forEach(counter => {
          counter.innerText = 0;
        });
        activated = false;
      }
    });*/

