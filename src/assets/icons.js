const icons = {
  add: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z",
  subtract: "M5 11h14v2H5v-2z",
  remove:
    "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z",
  arrow_left:
    "M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95z",
  arrow_right:
    "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414 4.95-4.95z",
  link:
    "M13.06 8.11l1.415 1.415a7 7 0 010 9.9l-.354.353a7 7 0 01-9.9-9.9l1.415 1.415a5 5 0 107.071 7.071l.354-.354a5 5 0 000-7.07l-1.415-1.415 1.415-1.414-.001-.001zm6.718 6.011l-1.414-1.414a5.001 5.001 0 00-3.531-8.551 5 5 0 00-3.54 1.48l-.354.354a5 5 0 000 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 010-9.9l.354-.353a7 7 0 119.9 9.9l-.001-.001z",
  image:
    "M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm11.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
  copy:
    "M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z",
  back_space:
    "M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z",
  edit:
    "M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z",
  kakao:
    "M12 3C17.799 3 22.5 6.664 22.5 11.185C22.5 15.705 17.799 19.369 12 19.369C11.4226 19.3693 10.8457 19.3326 10.273 19.259L5.865 22.142C5.364 22.407 5.187 22.378 5.393 21.729L6.285 18.051C3.405 16.591 1.5 14.061 1.5 11.185C1.5 6.665 6.201 3 12 3ZM17.907 11.06L19.377 9.636C19.4618 9.54791 19.5091 9.43033 19.509 9.30804C19.5088 9.18575 19.4612 9.0683 19.3762 8.98041C19.2912 8.89252 19.1753 8.84107 19.0531 8.83689C18.9309 8.83271 18.8118 8.87613 18.721 8.958L16.793 10.824V9.282C16.793 9.15682 16.7433 9.03676 16.6548 8.94825C16.5662 8.85973 16.4462 8.81 16.321 8.81C16.1958 8.81 16.0758 8.85973 15.9872 8.94825C15.8987 9.03676 15.849 9.15682 15.849 9.282V11.839C15.8313 11.9119 15.8313 11.9881 15.849 12.061V13.5C15.849 13.6252 15.8987 13.7452 15.9872 13.8338C16.0758 13.9223 16.1958 13.972 16.321 13.972C16.4462 13.972 16.5662 13.9223 16.6548 13.8338C16.7433 13.7452 16.793 13.6252 16.793 13.5V12.137L17.22 11.724L18.648 13.757C18.6837 13.8078 18.729 13.851 18.7813 13.8842C18.8337 13.9175 18.8921 13.9401 18.9532 13.9508C19.0143 13.9615 19.0769 13.96 19.1374 13.9465C19.198 13.933 19.2552 13.9077 19.306 13.872C19.3568 13.8363 19.4 13.791 19.4332 13.7387C19.4665 13.6863 19.4891 13.6279 19.4998 13.5668C19.5105 13.5057 19.509 13.4431 19.4955 13.3826C19.482 13.322 19.4567 13.2648 19.421 13.214L17.907 11.059V11.06ZM14.949 12.984H13.489V9.297C13.4834 9.17571 13.4313 9.06123 13.3435 8.97737C13.2557 8.89351 13.1389 8.84672 13.0175 8.84672C12.8961 8.84672 12.7793 8.89351 12.6915 8.97737C12.6037 9.06123 12.5516 9.17571 12.546 9.297V13.456C12.546 13.716 12.756 13.928 13.017 13.928H14.949C15.0742 13.928 15.1942 13.8783 15.2828 13.7898C15.3713 13.7012 15.421 13.5812 15.421 13.456C15.421 13.3308 15.3713 13.2108 15.2828 13.1222C15.1942 13.0337 15.0742 12.984 14.949 12.984ZM9.092 11.892L9.788 10.185L10.426 11.892H9.092ZM11.615 12.38L11.617 12.364C11.6168 12.2451 11.5714 12.1307 11.49 12.044L10.444 9.244C10.4002 9.11057 10.3166 8.99369 10.2046 8.90899C10.0926 8.8243 9.95733 8.7758 9.817 8.77C9.67564 8.76938 9.53744 8.81182 9.42079 8.89167C9.30414 8.97152 9.21457 9.08499 9.164 9.217L7.503 13.292C7.47956 13.3494 7.46765 13.4108 7.46796 13.4728C7.46826 13.5348 7.48077 13.5961 7.50478 13.6533C7.52878 13.7104 7.56381 13.7623 7.60785 13.8059C7.6519 13.8495 7.70411 13.8841 7.7615 13.9075C7.81889 13.9309 7.88033 13.9428 7.94232 13.9425C8.00431 13.9422 8.06563 13.9297 8.12279 13.9057C8.17994 13.8817 8.23181 13.8467 8.27543 13.8026C8.31904 13.7586 8.35356 13.7064 8.377 13.649L8.707 12.836H10.777L11.076 13.636C11.0963 13.6958 11.1285 13.7509 11.1705 13.7981C11.2125 13.8452 11.2635 13.8835 11.3206 13.9105C11.3777 13.9376 11.4396 13.9529 11.5027 13.9557C11.5658 13.9584 11.6288 13.9484 11.688 13.9263C11.7471 13.9042 11.8013 13.8704 11.8472 13.8271C11.8931 13.7837 11.9298 13.7315 11.9551 13.6737C11.9805 13.6158 11.994 13.5535 11.9948 13.4903C11.9957 13.4272 11.9838 13.3645 11.96 13.306L11.615 12.38ZM8.293 9.302C8.293 9.17699 8.24341 9.05709 8.15511 8.9686C8.06681 8.88011 7.94701 8.83026 7.822 8.83H4.577C4.45182 8.83 4.33176 8.87973 4.24325 8.96825C4.15473 9.05676 4.105 9.17682 4.105 9.302C4.105 9.42718 4.15473 9.54724 4.24325 9.63575C4.33176 9.72427 4.45182 9.774 4.577 9.774H5.737V13.51C5.737 13.6352 5.78673 13.7552 5.87525 13.8438C5.96376 13.9323 6.08382 13.982 6.209 13.982C6.33418 13.982 6.45424 13.9323 6.54275 13.8438C6.63127 13.7552 6.681 13.6352 6.681 13.51V9.774H7.821C8.082 9.774 8.293 9.562 8.293 9.302Z",
  search:
    "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z",
  menu: "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z",
  tab_share:
    "M10 3v2H5v14h14v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z",
  tab_history:
    "M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z",
  minus: "M5 11H19V13H5V11Z",
  truck:
    "M8.965 18C8.84612 18.8343 8.43021 19.5977 7.79368 20.1499C7.15714 20.7022 6.34272 21.0063 5.5 21.0063C4.65728 21.0063 3.84286 20.7022 3.20632 20.1499C2.56979 19.5977 2.15388 18.8343 2.035 18H1V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8H20L23 12.056V18H20.965C20.8461 18.8343 20.4302 19.5977 19.7937 20.1499C19.1571 20.7022 18.3427 21.0063 17.5 21.0063C16.6573 21.0063 15.8429 20.7022 15.2063 20.1499C14.5698 19.5977 14.1539 18.8343 14.035 18H8.965ZM15 7H3V15.05C3.39456 14.6472 3.8806 14.3457 4.41675 14.1711C4.9529 13.9966 5.52329 13.9541 6.07938 14.0474C6.63546 14.1407 7.16077 14.3669 7.61061 14.7069C8.06044 15.0469 8.42148 15.4905 8.663 16H14.337C14.505 15.647 14.73 15.326 15 15.05V7ZM17 13H21V12.715L18.992 10H17V13ZM17.5 19C17.898 19 18.2796 18.8419 18.561 18.5605C18.8424 18.2791 19.0005 17.8975 19.0005 17.4995C19.0005 17.1015 18.8424 16.7199 18.561 16.4385C18.2796 16.1571 17.898 15.999 17.5 15.999C17.102 15.999 16.7204 16.1571 16.439 16.4385C16.1576 16.7199 15.9995 17.1015 15.9995 17.4995C15.9995 17.8975 16.1576 18.2791 16.439 18.5605C16.7204 18.8419 17.102 19 17.5 19ZM7 17.5C7 17.303 6.9612 17.108 6.88582 16.926C6.81044 16.744 6.69995 16.5786 6.56066 16.4393C6.42137 16.3001 6.25601 16.1896 6.07403 16.1142C5.89204 16.0388 5.69698 16 5.5 16C5.30302 16 5.10796 16.0388 4.92597 16.1142C4.74399 16.1896 4.57863 16.3001 4.43934 16.4393C4.30005 16.5786 4.18956 16.744 4.11418 16.926C4.0388 17.108 4 17.303 4 17.5C4 17.8978 4.15804 18.2794 4.43934 18.5607C4.72064 18.842 5.10218 19 5.5 19C5.89782 19 6.27936 18.842 6.56066 18.5607C6.84196 18.2794 7 17.8978 7 17.5Z",
  cart:
    "M4 16V4H2V2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V15H18.438L20.438 7H8V5H21.72C21.872 5 22.022 5.03466 22.1586 5.10134C22.2952 5.16801 22.4148 5.26495 22.5083 5.38479C22.6019 5.50462 22.6668 5.6442 22.6983 5.79291C22.7298 5.94162 22.7269 6.09555 22.69 6.243L20.19 16.243C20.1358 16.4592 20.011 16.6512 19.8352 16.7883C19.6595 16.9255 19.4429 17 19.22 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16ZM6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23ZM18 23C17.4696 23 16.9609 22.7893 16.5858 22.4142C16.2107 22.0391 16 21.5304 16 21C16 20.4696 16.2107 19.9609 16.5858 19.5858C16.9609 19.2107 17.4696 19 18 19C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z",
  handcart:
    "M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8V9H22V11H20.833L20.076 20.083C20.0552 20.3329 19.9413 20.5658 19.7568 20.7357C19.5723 20.9055 19.3308 20.9999 19.08 21H4.92C4.66925 20.9999 4.4277 20.9055 4.24322 20.7357C4.05875 20.5658 3.94481 20.3329 3.924 20.083L3.166 11H2V9H6V8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM18.826 11H5.173L5.84 19H18.159L18.826 11ZM13 13V17H11V13H13ZM9 13V17H7V13H9ZM17 13V17H15V13H17ZM12 4C10.9738 4 9.98677 4.39444 9.24319 5.10172C8.4996 5.80901 8.05631 6.77504 8.005 7.8L8 8V9H16V8C16 6.97376 15.6056 5.98677 14.8983 5.24319C14.191 4.4996 13.225 4.05631 12.2 4.005L12 4Z",
};

export default icons;
