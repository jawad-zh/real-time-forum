export function active(id){
    
    document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  let element = document.getElementById(id)
  
  element.classList.add('active');
}