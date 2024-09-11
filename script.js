function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');

  // Toggle active state for sidebar and content
  sidebar.classList.toggle('active');
  content.classList.toggle('shrink');
}
