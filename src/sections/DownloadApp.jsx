import qrImage from "../Assets/qr-image.png";

function DownloadAppSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-10 md:mx-32 bg-slate-300 dark:bg-[#222A32] p-10 rounded-2xl">
      <div className="order-2 md:order-1 text-center md:text-left">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#111920] dark:text-white leading-[36px] md:leading-[46px] my-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
            Download{" "}
          </span>
          Download izzyAI App now!
        </h2>
        <p className="dark:text-white mb-5">
          Nec pharetra nam suspendisse sed ipsum non ultrices interdum
          elementum. Purus consectetur ultrices orci congue.
        </p>{" "}
        <div className="flex items-center justify-center md:justify-start md:space-x-2 mb-5 md:mb-0">
          <a href="#">
            <svg
              width="157"
              height="47"
              viewBox="0 0 157 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.578397"
                y="0.847684"
                width="155.01"
                height="45.115"
                rx="7.4216"
                fill="white"
              />
              <rect
                x="0.578397"
                y="0.847684"
                width="155.01"
                height="45.115"
                rx="7.4216"
                stroke="#101828"
                strokeWidth="1.15679"
              />
              <path
                d="M78.8192 25.4308C76.0985 25.4308 73.8809 27.5003 73.8809 30.3507C73.8809 33.1837 76.0985 35.2705 78.8192 35.2705C81.5412 35.2705 83.7588 33.1837 83.7588 30.3507C83.7576 27.5003 81.54 25.4308 78.8192 25.4308ZM78.8192 33.334C77.3281 33.334 76.0429 32.1044 76.0429 30.3518C76.0429 28.5808 77.3293 27.3696 78.8192 27.3696C80.3103 27.3696 81.5956 28.5808 81.5956 30.3518C81.5956 32.1032 80.3103 33.334 78.8192 33.334ZM68.0449 25.4308C65.3241 25.4308 63.1065 27.5003 63.1065 30.3507C63.1065 33.1837 65.3241 35.2705 68.0449 35.2705C70.7668 35.2705 72.9844 33.1837 72.9844 30.3507C72.9844 27.5003 70.7668 25.4308 68.0449 25.4308ZM68.0449 33.334C66.5537 33.334 65.2685 32.1044 65.2685 30.3518C65.2685 28.5808 66.5549 27.3696 68.0449 27.3696C69.536 27.3696 70.8212 28.5808 70.8212 30.3518C70.8223 32.1032 69.536 33.334 68.0449 33.334ZM55.2299 26.9416V29.0285H60.2249C60.0757 30.2026 59.6847 31.0598 59.0878 31.6555C58.3613 32.382 57.2242 33.1837 55.2299 33.1837C52.1551 33.1837 49.7513 30.7046 49.7513 27.6299C49.7513 24.5551 52.1551 22.0761 55.2299 22.0761C56.8887 22.0761 58.0999 22.7285 58.9941 23.5672L60.4667 22.0946C59.2174 20.902 57.5597 19.9893 55.2299 19.9893C51.018 19.9893 47.4771 23.418 47.4771 27.6299C47.4771 31.8418 51.018 35.2705 55.2299 35.2705C57.503 35.2705 59.2185 34.5244 60.5592 33.127C61.9381 31.7481 62.3673 29.8093 62.3673 28.2441C62.3673 27.7606 62.3303 27.3129 62.2551 26.9404H55.2299V26.9416ZM107.642 28.5623C107.232 27.4633 105.983 25.4308 103.43 25.4308C100.896 25.4308 98.789 27.4251 98.789 30.3507C98.789 33.1085 100.877 35.2705 103.672 35.2705C105.926 35.2705 107.231 33.8916 107.773 33.09L106.095 31.9713C105.537 32.7915 104.772 33.3317 103.672 33.3317C102.573 33.3317 101.79 32.8285 101.286 31.8406L107.865 29.1198L107.642 28.5623ZM100.933 30.2026C100.877 28.3008 102.405 27.3326 103.505 27.3326C104.362 27.3326 105.089 27.7618 105.332 28.376L100.933 30.2026ZM95.5847 34.9732H97.7456V20.5121H95.5847V34.9732ZM92.0426 26.5309H91.9685C91.4838 25.9525 90.5514 25.4308 89.3785 25.4308C86.918 25.4308 84.6634 27.5929 84.6634 30.3703C84.6634 33.1281 86.918 35.2717 89.3785 35.2717C90.5526 35.2717 91.4838 34.75 91.9685 34.1542H92.0426V34.8622C92.0426 36.7443 91.0361 37.7507 89.4155 37.7507C88.0921 37.7507 87.2719 36.801 86.9365 35.9993L85.0544 36.7824C85.5946 38.0861 87.029 39.6895 89.4155 39.6895C91.95 39.6895 94.0935 38.1984 94.0935 34.5637V25.7304H92.0437V26.5309H92.0426ZM89.5647 33.334C88.0736 33.334 86.8254 32.0847 86.8254 30.3703C86.8254 28.6363 88.0736 27.3696 89.5647 27.3696C91.0361 27.3696 92.1918 28.6363 92.1918 30.3703C92.1918 32.0847 91.0361 33.334 89.5647 33.334ZM117.769 20.5121H112.596V34.9732H114.754V29.4946H117.767C120.16 29.4946 122.513 27.7629 122.513 25.004C122.513 22.245 120.161 20.5121 117.769 20.5121ZM117.824 27.4818H114.754V22.525H117.824C119.438 22.525 120.354 23.861 120.354 25.004C120.354 26.1237 119.438 27.4818 117.824 27.4818ZM131.164 25.4054C129.601 25.4054 127.983 26.0937 127.313 27.6195L129.229 28.4188C129.638 27.6195 130.402 27.358 131.201 27.358C132.318 27.358 133.452 28.0278 133.471 29.2182V29.3674C133.08 29.1441 132.242 28.8098 131.22 28.8098C129.155 28.8098 127.052 29.9446 127.052 32.065C127.052 34.0004 128.745 35.2462 130.642 35.2462C132.093 35.2462 132.894 34.5949 133.396 33.8315H133.47V34.9478H135.554V29.4033C135.555 26.8375 133.637 25.4054 131.164 25.4054ZM130.903 33.3306C130.197 33.3306 129.21 32.9766 129.21 32.1021C129.21 30.9857 130.439 30.5577 131.5 30.5577C132.447 30.5577 132.895 30.7625 133.471 31.0413C133.303 32.382 132.15 33.3306 130.903 33.3306ZM143.145 25.7212L140.671 31.991H140.597L138.029 25.7212H135.703L139.554 34.4839L137.359 39.3586H139.61L145.545 25.7212H143.145ZM123.704 34.9732H125.861V20.5121H123.704V34.9732Z"
                fill="#101828"
              />
              <path
                d="M54.8531 12.1183C54.8531 13.0877 54.5662 13.8593 53.9912 14.4353C53.3388 15.1202 52.4874 15.4626 51.4417 15.4626C50.4399 15.4626 49.5873 15.1155 48.8875 14.4215C48.1864 13.7262 47.8359 12.8656 47.8359 11.8383C47.8359 10.81 48.1864 9.9493 48.8875 9.25522C49.5873 8.55999 50.4399 8.21295 51.4417 8.21295C51.9391 8.21295 52.4145 8.31012 52.8657 8.50331C53.318 8.69765 53.6801 8.95562 53.9508 9.27836L53.3411 9.88915C52.8819 9.33967 52.2491 9.06551 51.4405 9.06551C50.7094 9.06551 50.0778 9.32232 49.5445 9.83594C49.0112 10.3496 48.7452 11.017 48.7452 11.8372C48.7452 12.6574 49.0112 13.3248 49.5445 13.8384C50.0778 14.3521 50.7094 14.6089 51.4405 14.6089C52.2156 14.6089 52.8622 14.3509 53.3793 13.8338C53.7148 13.4972 53.9091 13.0287 53.9612 12.4283H51.4405V11.5943H54.8033C54.838 11.7759 54.8531 11.9506 54.8531 12.1183Z"
                fill="#101828"
              />
              <path
                d="M60.186 9.21943H57.0256V11.4197H59.876V12.2537H57.0256V14.4539H60.186V15.3076H56.1337V8.36687H60.186V9.21943Z"
                fill="#101828"
              />
              <path
                d="M63.9466 15.3076H63.0547V9.21943H61.1159V8.36687H65.8854V9.21943H63.9466V15.3076Z"
                fill="#101828"
              />
              <path
                d="M69.336 15.3076V8.36687H70.2279V15.3076H69.336Z"
                fill="#101828"
              />
              <path
                d="M74.1832 15.3076H73.2913V9.21943H71.3525V8.36687H76.122V9.21943H74.1832V15.3076Z"
                fill="#101828"
              />
              <path
                d="M85.1505 14.4111C84.468 15.1121 83.6201 15.4626 82.6056 15.4626C81.5911 15.4626 80.7431 15.1121 80.0618 14.4111C79.3793 13.7101 79.0392 12.8518 79.0392 11.8372C79.0392 10.8227 79.3793 9.96439 80.0618 9.26338C80.7431 8.56236 81.5911 8.21069 82.6056 8.21069C83.6143 8.21069 84.4611 8.56352 85.1459 9.268C85.8307 9.97249 86.1731 10.8285 86.1731 11.8372C86.1731 12.8518 85.8319 13.7101 85.1505 14.4111ZM80.72 13.8292C81.2336 14.3498 81.8617 14.6089 82.6056 14.6089C83.3494 14.6089 83.9787 14.3486 84.4911 13.8292C85.0048 13.3087 85.2627 12.6447 85.2627 11.8372C85.2627 11.0298 85.0048 10.3658 84.4911 9.84524C83.9787 9.32469 83.3494 9.06556 82.6056 9.06556C81.8617 9.06556 81.2336 9.32584 80.72 9.84524C80.2075 10.3658 79.9496 11.0298 79.9496 11.8372C79.9496 12.6447 80.2075 13.3087 80.72 13.8292Z"
                fill="#101828"
              />
              <path
                d="M87.4248 15.3076V8.36687H88.5099L91.8831 13.7656H91.9213L91.8831 12.4284V8.36687H92.775V15.3076H91.8437L88.3144 9.64629H88.2762L88.3144 10.9835V15.3076H87.4248Z"
                fill="#101828"
              />
              <path
                d="M54.8531 12.1183C54.8531 13.0877 54.5662 13.8593 53.9912 14.4353C53.3388 15.1202 52.4874 15.4626 51.4417 15.4626C50.4399 15.4626 49.5873 15.1155 48.8875 14.4215C48.1864 13.7262 47.8359 12.8656 47.8359 11.8383C47.8359 10.81 48.1864 9.9493 48.8875 9.25522C49.5873 8.55999 50.4399 8.21295 51.4417 8.21295C51.9391 8.21295 52.4145 8.31012 52.8657 8.50331C53.318 8.69765 53.6801 8.95562 53.9508 9.27836L53.3411 9.88915C52.8819 9.33967 52.2491 9.06551 51.4405 9.06551C50.7094 9.06551 50.0778 9.32232 49.5445 9.83594C49.0112 10.3496 48.7452 11.017 48.7452 11.8372C48.7452 12.6574 49.0112 13.3248 49.5445 13.8384C50.0778 14.3521 50.7094 14.6089 51.4405 14.6089C52.2156 14.6089 52.8622 14.3509 53.3793 13.8338C53.7148 13.4972 53.9091 13.0287 53.9612 12.4283H51.4405V11.5943H54.8033C54.838 11.7759 54.8531 11.9506 54.8531 12.1183Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M60.186 9.21943H57.0256V11.4197H59.876V12.2537H57.0256V14.4539H60.186V15.3076H56.1337V8.36687H60.186V9.21943Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M63.9466 15.3076H63.0547V9.21943H61.1159V8.36687H65.8854V9.21943H63.9466V15.3076Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M69.336 15.3076V8.36687H70.2279V15.3076H69.336Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M74.1832 15.3076H73.2913V9.21943H71.3525V8.36687H76.122V9.21943H74.1832V15.3076Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M85.1505 14.4111C84.468 15.1121 83.6201 15.4626 82.6056 15.4626C81.5911 15.4626 80.7431 15.1121 80.0618 14.4111C79.3793 13.7101 79.0392 12.8518 79.0392 11.8372C79.0392 10.8227 79.3793 9.96439 80.0618 9.26338C80.7431 8.56236 81.5911 8.21069 82.6056 8.21069C83.6143 8.21069 84.4611 8.56352 85.1459 9.268C85.8307 9.97249 86.1731 10.8285 86.1731 11.8372C86.1731 12.8518 85.8319 13.7101 85.1505 14.4111ZM80.72 13.8292C81.2336 14.3498 81.8617 14.6089 82.6056 14.6089C83.3494 14.6089 83.9787 14.3486 84.4911 13.8292C85.0048 13.3087 85.2627 12.6447 85.2627 11.8372C85.2627 11.0298 85.0048 10.3658 84.4911 9.84524C83.9787 9.32469 83.3494 9.06556 82.6056 9.06556C81.8617 9.06556 81.2336 9.32584 80.72 9.84524C80.2075 10.3658 79.9496 11.0298 79.9496 11.8372C79.9496 12.6447 80.2075 13.3087 80.72 13.8292Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                d="M87.4248 15.3076V8.36687H88.5099L91.8831 13.7656H91.9213L91.8831 12.4284V8.36687H92.775V15.3076H91.8437L88.3144 9.64629H88.2762L88.3144 10.9835V15.3076H87.4248Z"
                stroke="#101828"
                strokeWidth="0.231359"
                stroke-miterlimit="10"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7492 9.48493C11.6126 9.79435 11.5371 10.1734 11.5371 10.6144V36.1981C11.5371 36.6399 11.6126 37.019 11.7493 37.3283L25.6699 23.4057L11.7492 9.48493ZM12.5531 38.1604C13.0692 38.3814 13.7424 38.3114 14.4765 37.8951L30.8532 28.589L26.4879 24.2237L12.5531 38.1604ZM31.8972 27.997L37.0352 25.0778C38.6512 24.1582 38.6512 22.6555 37.0352 21.737L31.8947 18.8161L27.3058 23.4056L31.8972 27.997ZM30.8516 18.2233L14.4765 8.91856C13.7424 8.5014 13.0692 8.43183 12.5532 8.65302L26.4878 22.5877L30.8516 18.2233Z"
                fill="#101828"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="139"
              height="47"
              viewBox="0 0 139 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.745878"
                y="0.847684"
                width="137.659"
                height="45.115"
                rx="7.4216"
                fill="white"
              />
              <rect
                x="0.745878"
                y="0.847684"
                width="137.659"
                height="45.115"
                rx="7.4216"
                stroke="#101828"
                strokeWidth="1.15679"
              />
              <path
                d="M94.4759 22.4807V25.131H92.8147V26.869H94.4759V32.7744C94.4759 34.7909 95.3881 35.5975 97.6831 35.5975C98.0864 35.5975 98.4704 35.5495 98.8065 35.4919V33.773C98.5185 33.8019 98.336 33.8211 98.0191 33.8211C96.9917 33.8211 96.5404 33.3409 96.5404 32.2463V26.869H98.8065V25.131H96.5404V22.4807H94.4759Z"
                fill="#101828"
              />
              <path
                d="M104.653 35.7415C107.706 35.7415 109.579 33.6962 109.579 30.3066C109.579 26.9362 107.697 24.8813 104.653 24.8813C101.599 24.8813 99.7172 26.9362 99.7172 30.3066C99.7172 33.6962 101.59 35.7415 104.653 35.7415ZM104.653 33.9075C102.857 33.9075 101.849 32.592 101.849 30.3066C101.849 28.0405 102.857 26.7154 104.653 26.7154C106.439 26.7154 107.457 28.0405 107.457 30.3066C107.457 32.5824 106.439 33.9075 104.653 33.9075Z"
                fill="#101828"
              />
              <path
                d="M111.181 35.5399H113.245V29.3656C113.245 27.8964 114.35 26.9074 115.915 26.9074C116.28 26.9074 116.894 26.9746 117.067 27.0322V24.9965C116.846 24.9389 116.452 24.9101 116.145 24.9101C114.782 24.9101 113.62 25.6591 113.322 26.6866H113.168V25.083H111.181V35.5399Z"
                fill="#101828"
              />
              <path
                d="M122.193 26.6385C123.72 26.6385 124.719 27.7044 124.767 29.3464H119.485C119.6 27.714 120.666 26.6385 122.193 26.6385ZM124.757 32.7168C124.373 33.533 123.518 33.9843 122.27 33.9843C120.618 33.9843 119.552 32.8224 119.485 30.9884V30.8732H126.869V30.153C126.869 26.869 125.112 24.8813 122.203 24.8813C119.255 24.8813 117.382 27.0034 117.382 30.345C117.382 33.6866 119.216 35.7415 122.212 35.7415C124.603 35.7415 126.274 34.5892 126.745 32.7168H124.757Z"
                fill="#101828"
              />
              <path
                d="M80.9372 31.6783C81.0965 34.246 83.2363 35.8882 86.4211 35.8882C89.8248 35.8882 91.9547 34.1664 91.9547 31.4195C91.9547 29.2598 90.7405 28.0655 87.7945 27.3788L86.2121 26.9907C84.341 26.5528 83.5846 25.9656 83.5846 24.9405C83.5846 23.6466 84.759 22.8007 86.5206 22.8007C88.1926 22.8007 89.3471 23.6267 89.5561 24.9504H91.7258C91.5964 22.532 89.4665 20.8301 86.5505 20.8301C83.4154 20.8301 81.3254 22.532 81.3254 25.0897C81.3254 27.1997 82.5097 28.4537 85.1073 29.0608L86.9585 29.5087C88.8594 29.9565 89.6954 30.6134 89.6954 31.7082C89.6954 32.9821 88.3817 33.9077 86.5903 33.9077C84.6694 33.9077 83.3358 33.0418 83.1467 31.6783H80.9372Z"
                fill="#101828"
              />
              <path
                d="M59.5512 24.9101C58.1301 24.9101 56.901 25.6207 56.2672 26.8114H56.1136V25.083H54.1259V39.0159H56.1904V33.9555H56.3536C56.901 35.0598 58.0821 35.7127 59.5704 35.7127C62.211 35.7127 63.8914 33.629 63.8914 30.3066C63.8914 26.9842 62.211 24.9101 59.5512 24.9101ZM58.9655 33.8595C57.237 33.8595 56.152 32.4959 56.152 30.3162C56.152 28.1269 57.237 26.7634 58.9751 26.7634C60.7227 26.7634 61.7693 28.0981 61.7693 30.3066C61.7693 32.5248 60.7227 33.8595 58.9655 33.8595Z"
                fill="#101828"
              />
              <path
                d="M71.1154 24.9101C69.6943 24.9101 68.4652 25.6207 67.8315 26.8114H67.6778V25.083H65.6901V39.0159H67.7546V33.9555H67.9179C68.4652 35.0598 69.6463 35.7127 71.1346 35.7127C73.7753 35.7127 75.4557 33.629 75.4557 30.3066C75.4557 26.9842 73.7753 24.9101 71.1154 24.9101ZM70.5297 33.8595C68.8013 33.8595 67.7162 32.4959 67.7162 30.3162C67.7162 28.1269 68.8013 26.7634 70.5393 26.7634C72.2869 26.7634 73.3336 28.0981 73.3336 30.3066C73.3336 32.5248 72.2869 33.8595 70.5297 33.8595Z"
                fill="#101828"
              />
              <path
                d="M50.4218 35.5399H52.7905L47.6053 21.1784H45.2067L40.0215 35.5399H42.3106L43.6342 31.7281H49.1081L50.4218 35.5399ZM46.2916 23.786H46.4608L48.5408 29.857H44.2015L46.2916 23.786Z"
                fill="#101828"
              />
              <path
                d="M41.4087 10.346V17.2741H43.9101C45.9746 17.2741 47.1701 16.0018 47.1701 13.7884C47.1701 11.6087 45.965 10.346 43.9101 10.346H41.4087ZM42.4841 11.3254H43.7901C45.2256 11.3254 46.0754 12.2377 46.0754 13.8028C46.0754 15.392 45.24 16.2946 43.7901 16.2946H42.4841V11.3254Z"
                fill="#101828"
              />
              <path
                d="M50.8314 17.3749C52.3582 17.3749 53.2944 16.3522 53.2944 14.6574C53.2944 12.9722 52.3534 11.9448 50.8314 11.9448C49.3047 11.9448 48.3636 12.9722 48.3636 14.6574C48.3636 16.3522 49.2999 17.3749 50.8314 17.3749ZM50.8314 16.4579C49.9336 16.4579 49.4295 15.8001 49.4295 14.6574C49.4295 13.5244 49.9336 12.8618 50.8314 12.8618C51.7244 12.8618 52.2334 13.5244 52.2334 14.6574C52.2334 15.7953 51.7244 16.4579 50.8314 16.4579Z"
                fill="#101828"
              />
              <path
                d="M61.2672 12.0456H60.235L59.3035 16.0354H59.2219L58.1465 12.0456H57.1574L56.082 16.0354H56.0051L55.0689 12.0456H54.0223L55.4626 17.2741H56.5237L57.5991 13.4235H57.6807L58.761 17.2741H59.8317L61.2672 12.0456Z"
                fill="#101828"
              />
              <path
                d="M62.456 17.2741H63.4882V14.2157C63.4882 13.3995 63.9731 12.8906 64.7365 12.8906C65.4999 12.8906 65.8648 13.3083 65.8648 14.1485V17.2741H66.897V13.8893C66.897 12.6458 66.2537 11.9448 65.087 11.9448C64.2996 11.9448 63.7811 12.2953 63.5266 12.8762H63.4498V12.0456H62.456V17.2741Z"
                fill="#101828"
              />
              <path
                d="M68.5227 17.2741H69.5549V10.0051H68.5227V17.2741Z"
                fill="#101828"
              />
              <path
                d="M73.4372 17.3749C74.9639 17.3749 75.9001 16.3522 75.9001 14.6574C75.9001 12.9722 74.9591 11.9448 73.4372 11.9448C71.9104 11.9448 70.9694 12.9722 70.9694 14.6574C70.9694 16.3522 71.9056 17.3749 73.4372 17.3749ZM73.4372 16.4579C72.5393 16.4579 72.0352 15.8001 72.0352 14.6574C72.0352 13.5244 72.5393 12.8618 73.4372 12.8618C74.3302 12.8618 74.8391 13.5244 74.8391 14.6574C74.8391 15.7953 74.3302 16.4579 73.4372 16.4579Z"
                fill="#101828"
              />
              <path
                d="M78.9758 16.4915C78.414 16.4915 78.0059 16.2178 78.0059 15.7473C78.0059 15.2864 78.3324 15.0415 79.0526 14.9935L80.3297 14.9119V15.3488C80.3297 15.997 79.7535 16.4915 78.9758 16.4915ZM78.7117 17.3605C79.3983 17.3605 79.9696 17.0628 80.2817 16.5395H80.3633V17.2741H81.3571V13.702C81.3571 12.5977 80.6177 11.9448 79.307 11.9448C78.1212 11.9448 77.2762 12.5209 77.1705 13.4187H78.1692C78.2844 13.0491 78.6829 12.8378 79.259 12.8378C79.9648 12.8378 80.3297 13.1499 80.3297 13.702V14.1533L78.9133 14.2349C77.6698 14.3118 76.9689 14.8543 76.9689 15.7953C76.9689 16.7507 77.7035 17.3605 78.7117 17.3605Z"
                fill="#101828"
              />
              <path
                d="M84.86 17.3605C85.5802 17.3605 86.19 17.0196 86.502 16.4483H86.5837V17.2741H87.5727V10.0051H86.5404V12.8762H86.4636C86.1804 12.3001 85.5754 11.9592 84.86 11.9592C83.5397 11.9592 82.6899 13.0058 82.6899 14.6574C82.6899 16.3138 83.5301 17.3605 84.86 17.3605ZM85.1529 12.8858C86.0171 12.8858 86.5597 13.5724 86.5597 14.6622C86.5597 15.7569 86.0219 16.4339 85.1529 16.4339C84.2791 16.4339 83.7558 15.7665 83.7558 14.6574C83.7558 13.558 84.2839 12.8858 85.1529 12.8858Z"
                fill="#101828"
              />
              <path
                d="M94.2665 17.3749C95.7932 17.3749 96.7294 16.3522 96.7294 14.6574C96.7294 12.9722 95.7884 11.9448 94.2665 11.9448C92.7397 11.9448 91.7987 12.9722 91.7987 14.6574C91.7987 16.3522 92.7349 17.3749 94.2665 17.3749ZM94.2665 16.4579C93.3686 16.4579 92.8645 15.8001 92.8645 14.6574C92.8645 13.5244 93.3686 12.8618 94.2665 12.8618C95.1595 12.8618 95.6684 13.5244 95.6684 14.6574C95.6684 15.7953 95.1595 16.4579 94.2665 16.4579Z"
                fill="#101828"
              />
              <path
                d="M98.0959 17.2741H99.1281V14.2157C99.1281 13.3995 99.613 12.8906 100.376 12.8906C101.14 12.8906 101.505 13.3083 101.505 14.1485V17.2741H102.537V13.8893C102.537 12.6458 101.894 11.9448 100.727 11.9448C99.9395 11.9448 99.421 12.2953 99.1665 12.8762H99.0897V12.0456H98.0959V17.2741Z"
                fill="#101828"
              />
              <path
                d="M107.291 10.7445V12.0696H106.46V12.9386H107.291V15.8913C107.291 16.8996 107.747 17.3029 108.895 17.3029C109.096 17.3029 109.288 17.2789 109.456 17.2501V16.3907C109.312 16.4051 109.221 16.4147 109.063 16.4147C108.549 16.4147 108.323 16.1746 108.323 15.6273V12.9386H109.456V12.0696H108.323V10.7445H107.291Z"
                fill="#101828"
              />
              <path
                d="M110.842 17.2741H111.874V14.2205C111.874 13.4283 112.345 12.8954 113.19 12.8954C113.919 12.8954 114.308 13.3179 114.308 14.1533V17.2741H115.341V13.8989C115.341 12.6554 114.654 11.9496 113.54 11.9496C112.753 11.9496 112.201 12.3001 111.946 12.8858H111.865V10.0051H110.842V17.2741Z"
                fill="#101828"
              />
              <path
                d="M119.064 12.8234C119.828 12.8234 120.327 13.3563 120.351 14.1773H117.71C117.768 13.3611 118.301 12.8234 119.064 12.8234ZM120.346 15.8625C120.154 16.2706 119.727 16.4963 119.103 16.4963C118.277 16.4963 117.744 15.9153 117.71 14.9983V14.9407H121.403V14.5806C121.403 12.9386 120.524 11.9448 119.069 11.9448C117.595 11.9448 116.659 13.0058 116.659 14.6766C116.659 16.3474 117.576 17.3749 119.074 17.3749C120.269 17.3749 121.105 16.7988 121.34 15.8625H120.346Z"
                fill="#101828"
              />
              <path
                d="M28.8201 23.7533C28.8451 21.8087 29.8895 19.9687 31.5461 18.9502C30.501 17.4576 28.7505 16.5112 26.9292 16.4542C24.9867 16.2503 23.1035 17.6166 22.1136 17.6166C21.1045 17.6166 19.5805 16.4744 17.9393 16.5082C15.8001 16.5773 13.8058 17.7936 12.765 19.6638C10.5278 23.5372 12.1966 29.2299 14.3397 32.3609C15.4119 33.894 16.665 35.6066 18.3047 35.5459C19.9093 35.4793 20.5085 34.5227 22.4454 34.5227C24.3642 34.5227 24.9264 35.5459 26.5994 35.5073C28.3211 35.4793 29.4059 33.9673 30.4405 32.4196C31.2109 31.3272 31.8038 30.1198 32.197 28.8422C30.1737 27.9864 28.8224 25.9502 28.8201 23.7533Z"
                fill="#101828"
              />
              <path
                d="M25.6601 14.3951C26.5989 13.2681 27.0614 11.8196 26.9494 10.3572C25.5152 10.5078 24.1903 11.1933 23.2389 12.277C22.3085 13.3359 21.8243 14.7589 21.9158 16.1654C23.3506 16.1802 24.7611 15.5133 25.6601 14.3951Z"
                fill="#101828"
              />
            </svg>
          </a>
        </div>
      </div>
      <img className="order-1 md:order-2" src={qrImage} />
    </div>
  );
}

export default DownloadAppSection;