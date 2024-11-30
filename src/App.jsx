import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   
    
    <div className=" mx-auto ml-[-350px] w-[1940px]">
      {/* Banner Section */}
  <div className="bg-gray-300 h-[30px] text-center justify-center ">
    <a href="">Click here</a> to experience our integration with platforms more easily
  </div>
   
  {/* Main Content Section */}
  <div className= " mx-auto">
    {/* Navigation Section */}
    <div className="flex flex-row border justify-center border-gray-300 shadow-sm p-4 space-x-4">
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">
        HOME
      </button>
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">
        COMPANY
      </button>
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">
        PRICING
      </button>
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">
        PRODUCT
      </button>
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">
        CONTACT
      </button>
    

     {/* Login and Register Section */}
     <div className="ml-[300px] space-x-4 mt-4 ">
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white ml-[120px]">
        Login
      </button>
      <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white border border-black">
        Register
      </button>
     </div>
    </div>
  </div>
  
  <div className="justify-between mt-20 ml-[300px] flex flex-row">
      <h5 className="text-6xl font-bold ml-[-120px]">Customize<br/> your meetings</h5>
    <div>
     <h3 className="mr-[500px] font-medium">Pine is constantly improving to move<br/>forward through</h3>
       <button
         className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white bg-gray-500 mt-[20px] mr-[500px]">Get
                    started</button>
    </div>
  </div>
  <div className="grid grid-cols-3 ml-[200px] gap-[80px]">
            <div className="relative">
                <div className=" h-[300px] w-[220px] absolute rounded-[30px] mt-[60px]">
                    <img className="h-[300px] w-[220px] absolute rounded-[30px] mt-[0px]" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDxAVEBUXFRUVFxUXFRUVGBUXFRYYFxUVFRcYHSggGBomHRUWITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGisgICIuLS0tLi0tLS0tLS0tLS0tLS0tLS0rLS0rLS0rLS0tLS0tKy0tLS0tLSstLS03LS0rLv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQQFAgMGBwj/xABBEAACAQIEAwQGCQEFCQAAAAAAAQIDEQQSITEFQVEGImFxBxMygZGhI1JygrHB0eHwFBUkYpKyM0JEU6LC0uLx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAIhEBAQACAwEAAgIDAAAAAAAAAAECEQMSITETQVFhBCMy/9oADAMBAAIRAxEAPwD7QkciIAAAAAAAAAAAAAAAAACFIADOjGYynRg6lapGnFbyk0l8zxXGfSZh6emGpSxD6v6OHzTk/gRbImS17sHyLEekjiEu9CNCkumSUn8XLX4HSvSRxCL1dGfnSa/CSK94t+OvsZD5twz0p3dsTh0l9anL/sl/5HtuD8ewuLV8PWjN2u47TXnF6+8tMpUXGxsikBKoAAkIUgQAECVIAAOLORGBxBQQhkkAJAAAAAAAAAAAAAAAAEZ4ntR27hRbo4NKtUWkp7wg+it7b+S+RhekztLOH9zoSy3S9bJPXXammttNX5o8hhMEopOW9tvyOWfJp34uLs44v1+Kl6zEVJ1J+L0XhFbRXgkYqwbXJLqjZyi3qiqk+ZmvK248DTSptaW+J1zhflY3tTD3R0f0WjuV/It+Fo3RT0f8/mhIQakpQk4uOqknZxfWLWqZt54SJj1KMYl5yueXA9T2c9IlWk1TxydaGyqpL1kftraa8Vr5n0vA4ylXgqtGcakHtKLuv2fgfBnRjJeP4/uZPZfj9bh9e8e9BtKpTvZSXVdJdGd8ORl5OLT7wDqwuIhVhGpTeaMkpRfVM7TszoAABCkISAgAoIAFgUAdwAJQhSFAAAAAAAKABCgCHRjsTGjSnVltCLk/cjIPPdtKv0CorepLX7Me8/nlXvIt8TJuvl13Vrzr1XduTk7829fhqdyndnPE08rstFsdW2xg5Lt6vFjJGXhqdzPp4ZE4VBM3bwsbXRSY7dblppnQ8LmPiaS3Ru5wiY9WnF9CLiTJ5mpHUwsQrnocbSjc0mMpcxFr8aicrM51GqiT57P9zqrR1OvCu08t+TfwV38jviy8k8fWfRljnKhKhK/cd43+q918dfvHsz5x2Hq+rq05aWn3JafWWj+KR9INeF8efyTVQAFlAhSMhKAAACAClIAO8AEoQoAAAACkKAAAAAADzfaON6qfKNP/AFSd/wDSjfYrEwpQdSpJRit2zV42pTq2qQanCUI2ktU9WVyWx+7fPeM02ntdau/5fG5qVK56XjuH0aiurNBhcPmdmYOT69Xi+Njwym+p6KjJ5bGpwNJR0djb08ttyMFs66JSMaorXZmzppSSO6rSiou+hbrtXtp5rFM0uMqWXQ9LiaMd3Y87xFR8NznJ6678amSVjEor6VPpf3qzTXzMrEaI6eGQcqvlb5tHbFwz+Pd9m42grfWg/LZ3+ex9OZ4fgODjFQS0ileT8b835JeVjdcB7W4XG1J08O5SUW4qo0lCo1v6t3u1z8tTXj48/P1viFIWcxkZWQCEKyAAABQQAZBACUBQAAAAoAAAAAAAPD+kriE4/wBPh6U3BzqZ5tf8uG8X4O/yOPZyk40Jw272aK12aXLzV/8A6YvpFpJYqFXpQyr71R6/BM6uxXEJ1Z1qc+9kUXGXg9Mr130Mvb/a3TCfgldfaTGOlQdSEHOT7qSTer+t4aHzqVHHybm1O/RXVn0t0+Z9H45jY01kte7cnfl/Nzw3Ge1NeE8lCm5JbyjByu+i5LzZG/dSLanXdrUYjGcSo97LUgutvh/Hc78H2sxl+/dvndWdl/NjBx/azG3lCVRRs4rVJxkmpScs6jZWslbnm8DYwr16c4wrwp1M0IyTjZ6SS7r5ZtbW0fS5ay69kUxs35a9rwjirqQUr689Thxzi8lDu/DXbnryZg8EpJyileKZj8cvGp6vdt2M37bdePLcW4ziqj7sp5bytbmrmBheG46s7xjNLrJ6G2hKpXrRoUJRppys6krRjDa7beitdPm/DmaapisVGUqanO6nOOZxnkllaUcklJ6vV8ktN7mrHevNMOeu3ttZsuz2Lj3nLK1zv+lz1PZPDynQqSqQ+lhKMW1s4N3zPx0PLQ4njqc7NSqQu1ezaaXNX7y99z0fBuJPM6bWWNVKMtbNK9/joRu79W6zXm3ucVJf2ZipZ8qdGcVP7ay5v+p/I+fdkcRKlxXC5fZjJQil0qd1+931fguh6j0hzlR4PBQ7uevTi/spTkl5d2J5bsRH1nEMI1r9Kk/u978Ey2X2KYSar9CEKDuyIyMpCEoyM5EAhCgCAoAyAASgAAAIFAAAAUhQBCgDwfpGp9+k7e3BwXTNF3Sf+YxexcMtVx0u6bcrfWUo/qey7Q8OVei0leUe9D7SR4jstPLjWtnKEk10atfTroZM8dcsv8t/Hl24LP4YPaqheu82vTyMajg5xhmglb3fNt/kbTjkfWSzdHl+H73MrgsYtOM7bHLL/vTRx+YbeWr4TE1v+HjorXvFc10Zzo8OjSi/WKF2uSvby8T1+MowhHSd9OWx5ycYuWjzFcrZ4thJl6cIpd+9tLms7RU/pM61tf4c0b3DLLrY1nGtdfcUldbHDgaioPIou/haXukjoxmBqSk3a/m0/wAYs6OHzUJuL7r5dGb6j3luWuVikwlaipgZ5czstN7uT/BJe5GrwdK+Jpx276PVV43jZGmwOGkq0qiV8ivbzTS+Zbju6py46xbL0sZYYDC0nK151JLnrGFopddZJGp9EfDpTx0Xq40YyqSf+KSyx/1fiZPpBwOJxEcDTp0qlZxhUk8sJSV5Sio3aVk7I+i9g+z/APRYVKcVGtO0qnO1vZjfwT+NzXreTB264PSApDszhCkIEIVkAgDAEKQAZIAJQAAAUiKAAKAAAAAADprUIayyrN1sr/Hc7zjNXT8gPn3HpRTsujlb36/iaR4yy3Ha6vKnXpz5ZpQkvCT/APZHneJVZSl6uMnCDSlKSWtntGPjvdmDPHtk9Xiz64s2pj5V55IyeVPU2Ea1GgrznGCfOTS16XfuNTg4RppKmtPn7+p3YjDyqRs43T5WKXGOkzv16fhWNovv2VRcrPR+/mavtFi6Si22otvbkveefjgquHpuVCOXM7Ws7N9WuviaXiHDcdiJZqsHl2SS+Zece/34peXXuvWZj+IwnUgoST1Wzvz12Nssa6Ou8fwPN4fgs6XecGmupm18TdJPXQXCfIicl+16X+1YNXMnstNTqVpSfdyJfM8HTveUYt5VHN9l+BtuAYqUYSinrPLb4r9fkWwwmOW0cnJcsdPufAv9hFrZ3t5bL8DOZh8Dp5cNSX+FfPUzTZHmX6gDBIhCkIEIciAQhSAAABkAAlAAACKAAKAAAKAAAAAAfMe3vD+/UXXvL4fz4Hjp0rwTe/6/vmPrPbnBZqKrR9qD18Yv9PzZ8vqU0s0eXtL7Mv0dviZOTHWTfw5zLHTUepx0ZxlQqx9W5JSUoJuCbs5eMVu+i12Tt7Wh2Px1SEZxxUJN5NnNLLOKeZWe12/gazAUc0csd917jt4dQrwquphatSjUeRSUWrSVNtxi4yTjpdrbmyJZfrr0y1vGtxDshxNRl9PDR+y3Jp25q97HTV7C8QqSj6zERs73s5dzTTTRHosNxXFOGX+ohGd+963Dty1a0j6ucY2Wtrp8rmFx/iuNlHLRruNn7dOlGKatqn6zPpq9lyRfrhHLfLbrTxnHuzEsLS9ZWxeR/SNrNuqab7qbu29NPE8ZwnAYirN1K05wpJvLF2zNcr6XWh6LEcOcJ+sxNSeKq3k4yqScsrk7yyR2ir9FyLKpvfd6eV9ytyk8i/479ya7FwShlWmd/CK3Np2VwLrV4Rju5JL8v1NXi+9JJeR9N9FfCYpTxEtWu7Dwv7UvPS3lfqThjuufJnJi+gU4KKUVskkvJaI5FIamFCHIgS4gpCBCHIgHEFIBCgAd4AJQABAUIBAUAAUAAAAAAJOaSbbSS1bfIDA49G+Hl7vxPkNdxVWStonJfde6/nQ+ncV4vTqwlClJTWVtyW3gl1PlnFIvM7b3ucOWzbVwY3TtoKVKWmtnp/PmZs8fBvPrGXNrn5o0+Cxql3JaTS26pdDIc43u1d9OviZ8vGvCtrHtTNW70n93p5mLjO1Up6OUv8vu8jup4OGW80tdldswsVhox2hoOy3v9NfiscneS1fV7mFTk0m+eyXi/wAzsxdWKfs2MCvj4wWd737q6vmWxm3PkrIm4wavvay927Prnozi/wCkk3zn+S/U+EYfESqVU5Pdr4dEfbeyXE4YWjTjUajCo3r9Vuyi34cvgd8PrLyTx7gETvtqU7MyEKAOLBWQJQhSECApAICgDuBSEoCgACkKAKQoAAN23ABmPUxS2WpjVKkpbkbTpk1sTb2fieO7f4uSjRp5nllKTkvrZUrRfhd3t4Hp7aGh7cYH1mFdRK7ptT+7tL5O/uKZ76104td5tqeH4iNrLnF/geX4grydjhhsbKDTvoccRVvJvrqZbluN+OOqxcXglNKS0ktmt0zCnxDI7VHlfX/dfj4G7pbGq4lhV5lccv0tlj+3GXFm9Yzv5PQ663FHb2vmefx3CIu8oIwYcPaeqO0mLjbk2eM4lm538v1NdObk7vX+bHY6fRCnAsrp34BWkmew45xyKoQpx1bg1py2/Y8hTVjnFuUtdbEbTcdtzwrtJWw9WnXjOcXFrPFSeWpHZ3jtfxPvmE4ipJOXNKz80fA+F8L/AKirToLebS8o7yfuSZ9sp0bRstkkkvIvx3bhzYyVvyGtwteUdN14/kZ0K6emzOu3DTmQ5EZIhCkIEZDkQCFAA7gEUlCAoAAFAC501a1jEqVHLmQnTJqYtbR1MWpUb3ZwS6HL5hOkT8LnKOgKmQCEoKScZappprqnowmcl1A+N9peGywdaVF+z7VN9YPb3rZmvp1LxTPrnajgEMdRyXyzjrTn9V9H/hezX6HyCeEq4evLD1oOElyfPxT5rxMueHVv4uTtP7ZFGu0MZVTWx1zg4vUtaOlzk7tRV0ejOid3ubKWHctjHlh2nsXlUsrDWHucnh0kbSnh2o3sYdSV3YbRcdMKssqOzCpRi5PYxuJVVG19Ee17FdiKmKy18XFwoKzjTekqvS65Q+bOkxtc8spj7W+9GfA5Rg8bVjZ1Fakuap/W+9+CXU99CPyLGCSyqystEtLI5tWR3k1NMeWXa7cGnyKcspwknyJVd1LEtaMyYVVLYwGn0F2iRsQdFGvykd4QgKRgQHEoHcjkASgBQAOqpU6AEUYU2QAhZbWKigBoVoACJLcKXQADkzX8Z4LQxcUq0LuPszWko+T6eD0AFmyWz2PIcY7HVYRbharHzUZLzT0+Z56lhLJxfiAY+bCY3x6P+PyXOeunD0lrF7nLG4KyuAcmhMbRjGlFeB2cG7F4uv38kacHtKcovTqoxbfxsQHXhxmX1n/yM7jNx67gfo9wlCoq9X+81VqnNLJF9Y09r+Lu/I9crciA2Saefcrb65xVjjn5fkAECZcv81AA4teBxl0AAkoO3I7qFVlAGVGSexJAFkOAAIH/2Q==" alt=""/>
                </div>
                <div
                    className="bg-gray-100 h-[250px] w-[200px] relative right-[130px] top-[40px] rounded-[30px]  justify-center  mt-[50px]">
                    <div className="flex mt-[24px] ml-[60px]">
                        <img src="forest.jpg" alt="profile pic" class="h-[50px] rounded-xl mt-5"/>
                    </div>
                    <div className="font-bold ml-[50px] mt-5 text-2xl mr-4">
                        <span>Cody Fisher</span>
                    </div>
                    <div className="border border-gray-300 w-[150px] h-2 bg-gray-300 ml-5 mt-3 rounded-lg"></div>
                    <div className="border border-gray-300 w-[100px] h-2 bg-gray-300 ml-8 mt-3 rounded-lg"></div>

                    <div className="ml-8 inline-flex">
                        <button
                            className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white bg-gray-500 mt-[20px]">Get
                            started</button>
                    </div>

                </div>
            </div>

            <div className="bg-sky-100 h-[200px] w-[350px] rounded-[30px] flex flex-row mt-[130px] ">

                <div className="bg-gray-100 h-[350px] w-[250px] relative right-[90px] top-[-60px] left-[50px] rounded-[30px] justify-center ">
                   <h4 className="text-2xl font-bold ml-[30px] mt-[30px]">Payment Plan </h4>
                   <div className="border border-gray-00 w-[180px] h-3 bg-gray-300 ml-6 mt-4 rounded-lg"></div>
                   <div className="border border-gray-00 w-[130px] h-3 bg-gray-300 ml-6 mt-2 rounded-lg"></div>

                    <div className="border border-gray-00 w-[210px] h-[60PX] bg-gray-700 ml-6 mt-6 rounded-lg inline-flex">
                       <div className="ml-2 mt-1">
                       <img src="bitcoin.svg" alt=""/>
                       </div>
                       <div className="border border-gray-00  w-[180px] h-2 bg-gray-300 ml-[50px] mt-5 rounded-lg">

                    </div>
                    <div className='mt-[100px] w-[300px] justify-items-center  ml-[400px]'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoyo8UQGbeBKmisqDfZ2jjK_KlAVeVuB9Iw&s"/>

                    </div>
                    <div>
                    <div className=" h-[280px] w-[350px] rounded-[30px]   mt-[-50px]">
                <div className="mt-4 ml-6">
                    <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                </div>
                <div className="mt-8  ">
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. 
                    </h2>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-gray-300 h-[150px] w-[85em] mt-[280px] mb-[200px]  rounded-lg ml-[-570px] flex items-center">
            <div className=" ml-[320px]">
                <table className=" ">
                    <thead className=" justify-center ml-[12px] gap-[820px] divide-x ">
                        <tr>
                            <th scope="col" class="font-medium text-gray-500 ">
                                Date
                            </th>

                            <th scope="col" class="font-medium text-gray-500">
                                Type
                            </th>
                            <th scope="col" class=" font-medium text-gray-500 ">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <br/>
                    <tbody className=" divide-y divide-gray-900 mt[120px] ">
                        <tr>
                            <td className="px- py-whitespace-nowrap gap-[120px] mt-[12px]">
                                <div
                                    className="text-3xl text-gray-900 cursor-pointer font-bold inline-flex divide-x divide-gray-200 ">
                                    <svg className="w-[48px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2.4" d="M5 12h14m-7 7V5" />
                                    </svg> 824k
                                </div>
                            </td>
                            <td className="px-[120px] py-whitespace-nowrap divide-x divide-gray-200 ">
                                <div className="text-3xl text-gray-900 cursor-pointer font-bold inline-flex"><svg
                                        className="w-[48px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2.4" d="M5 12h14m-7 7V5" />
                                    </svg> 102k
                                </div>
                            </td>
                            <td className="px- py-whitespace-nowrap">
                                <div className="text-3xl text-gray-900 cursor-pointer font-bold inline-flex"><svg
                                        className="w-[48px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2.4" d="M5 12h14m-7 7V5" />
                                    </svg> 86k
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="grid grid-cols-2">
            <div className="justify-between mt-20 ml-[-650px] mb-4 ">
              <div>
                <h5 className="text-6xl font-bold">World class<br/> dashboard</h5></div>
                <h3>Lorem Ipsumis simply dummy text of the printing <br/>and typesetting industry. </h3>
                
                <button
                    className="items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white border border-black ">
                    View All Features</button>
            </div>

            <div className="bg-sky-100 h-[300px] w-[200px] rounded-[30px] flex flex-row justify-center items-center mt-[10px] ml-[350px]">
                 <div className="grid grid-row-4 gap-m-6">
                    <div className="h-[200px] w-[300px] rounded-lg flex flex-col   bg-gray-300 ml-[10px] ">
                        <h5 className="text-2xl font-bold ml-[30px] mt-[40px]"> Total Revenue </h5>
                         <div className="border border-gray-00 w-[250px] h-1 bg-gray-100 ml-5 mt-6 rounded-lg"></div>
                         <div className=" mt-6 ml-6 inline-flex"><svg class="w-[44px] h-[44px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                          </svg>
                          <h3 className="text-2xl font-bold ml-6"> 4.32k  </h3>
                          </div>
                        </div>

                        <div className="h-[260px] w-[300px] rounded-lg ml-[10px] mt-5 bg-gray-300 ">
                            <div className="flex flex-row">
                              <h5 className="text-2xl font-bold ml-[30px] mt-[30px]">Balance</h5>

                              <button className="inline-flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white bg-gray-500 mt-[30px] ml-9">Get
                                started 
                              </button>
                            </div>
                             <div className="border border-gray-00 w-[250px] h-1 bg-gray-100 ml-9 mt-6 rounded-lg">

                            </div>

                            <h5 className="text-2xl font-bold ml-[30px] mt-[20px]"> $60,124.00</h5>
                            <div className="border border-gray-00 w-[120px] h-1 bg-gray-100 ml-9 mt-3 rounded-lg">
                            
                             <div className="border border-gray-00 w-[250px] h-[50PX] bg-gray-700 ml- mt-6 rounded-lg inline-flex">
                                <div><svg className="w-[44px] h-[44px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                  </svg>
                                </div>
                                <h5 className="text-xl font-bold ml-[5px] mt-[10px]"> Pine</h5>
                                <div className="border border-gray-00 w-[90px] h-2 bg-gray-300 ml-[50px] mt-5 rounded-lg">

                             </div>
                        </div>
                        </div>
                    </div>
                    <div className="grid grid-row-4 gap-m-4">
                    <div  className="h-[300px] w-[400px] rounded-lg  justify-center items-center bg-gray-300 ml-[340px] mt-[-350px] ">
                        

                        <h5 className="text-2xl font-bold ml-[30px] mt-[30px]">Income & Expenses</h5>
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrUFZpYLp7CsjrQdTl05GuqGGPl-ZIpo4-g&s" class="bg-gray-300 w-[400px] h-[250px]"/>  
                        </div>
                      
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-[120px] ml-[300px]">
            <div className="grid grid-cols-4 gap-m-6">
               <div className="h-[500px] w-[400px] rounded-lg  justify-center items-center bg-gray-300 ml-[-700px] mt-[50px] ">
                  {/* <h3 className="text-2xl font-bold ml-[30px] mt-[30px]"> */}
                    <img src="five-stars.svg" alt="" class="h-[130px] w-[330px] "/>
                    <h3 className="mr-8 ml-8">
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                     survived not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                     containing Lorem
                        
                    </h3>
                    <div className="flex mt-[60px] ml-4">
                        <img src="forest.jpg" alt="profile  pic" class="h-[50px] rounded-3xl"/>
                        <div className="px-2">
                            <h4>joseph ayoola</h4>
                            <p>@ayoola</p>
                        </div>
                    </div>
                </div>

                <div
                    className="h-[500px] w-[400px] rounded-lg  justify-center items-center bg-gray-300 ml-[-220px] mt-[80px]">
                    <img src="five-stars.svg" alt="" class="h-[130px] w-[330px] "/>
                    <h3 className="mr-8 ml-8">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem
                    </h3>
                    <div className="flex mt-[60px] ml-4">
                        <img src="forest.jpg" alt="profile  pic" class="h-[50px] rounded-3xl"/>
                        <div className="px-2">
                            <h4>joseph ayoola</h4>
                            <p>@ayoola</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-[50px] ">
                <div className="grid grid-cols-4 gap-m-6">
                    <div className="h-[500px] w-[400px] rounded-lg  justify-center items-center bg-gray-300 ml-[-700px]">
                        <img src="five-stars.svg" alt="" class="h-[130px] w-[330px] "/>
                        <h3 className="mr-8 ml-8">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem
                        </h3>
                        <div className="flex mt-[60px] ml-4">
                            <img src="forest.jpg" alt="profile  pic" class="h-[50px] rounded-3xl"/>
                            <div className="px-2">
                                <h4>joseph ayoola</h4>
                                <p>@ayoola</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="h-[490px] w-[400px] rounded-lg justify-center items-center bg-gray-300 ml-[-220px] mt-[20px]">
                        <img src="five-stars.svg" alt="" class="h-[130px] w-[330px] "/>
                        <h3 className="mr-8 ml-8">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem
                        </h3>
                        <div className="flex mt-[60px] ml-4">
                            <img src="forest.jpg" alt="profile  pic" className="h-[50px] rounded-3xl " />
                            <div className="px-2">
                                <h4>joseph ayoola</h4>
                                <p>@ayoola</p>
                            </div>
                        </div>
                    </div>
<div className='mt-[600px]  '>
                    <div className="mt-[0px] ml-[-200px]">
                <div className=""><svg className="w-[60px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                </div>
            </div>
            <div className="justify-between mt-20 ml-[-400px] flex flex-row">
                <h5 className="text-6xl font-bold">Take a look at the latest articles from</h5>
            </div>
            <div className="grid grid-cols-3 m-[0px] gap-[600px] ml-[-999px]">
                <div className="relative">
                    <div className="bg-red-300 h-[300px] w-[370px] absolute rounded-[30px] mt-[60px]">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQo6i5SAAIo889_6nY-vVchxSm4vTy39UMA&s" className="h-[300px] w-[400px] rounded-[30px]"/>

                    </div>
                    <br/>

                </div>

                <div className="bg-red-100 h-[300px] w-[500px] rounded-[30px] flex flex-row justify-center items-center mt-[60px]">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RHj5aBArvQQQtkpqkJU3MzDrr2ji2rg00w&s" className=" h-[300px] w-[600px] rounded-[30px]" />

                </div>


                <div className="bg-red-100 h-[300px] w-[400px] rounded-[30px] flex flex-row justify-center items-center mt-[60px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSsDo7g775VuxslAo-iV7ygJfHN8LyLqWNw&s" className="h-[300px] w-[500px] rounded-[30px]"/>

                </div>

            </div>
            <div className="flex flex-row gap-[500px] ml-[-900px]">
                <div>
                    <button
                        className="items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white ml-[70px] mt-5 bg-gray-500">
                        stories
                    </button>
                    <h1 className="text-2xl font-bold ml-0px]">The 3 best social media analytics</h1>
                    <div className="mt-4">
                        <h2>20 october 2024</h2>
                    </div>
                </div>
                <div>
                    <button
                        className="flex items-center rounded-md px-7 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white   ml-[80px] mt-5 bg-gray-500">
                        user experience
                    </button>
                    <h1 className="text-2xl font-bold ">Lorem Ipsum as their default model text, and a search </h1>
                    <div className="mt-4">
                        <h2>20 october 2024</h2>
                    </div>
                </div>
                <div>
                    <button
                        className="items-center rounded-md px-5 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white ml-[70px] mt-5 bg-gray-500 ">
                        dashboard
                    </button>
                    <h1 className="text-2xl font-bold ">Lorem Ipsum is simply dummy text of the printing</h1>
                    <div className="mt-4">
                        <h2>20 october 2024</h2>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        <div className="border b-black bg-black h-[380px] w-[2080px] mt-8  ml-[-1300px]  text-center">
            <div className="flex flex-row ml-[300px]">
                <div>
                    <div className="ml-[300px] mt-[120px] inline-flex gap-4">
                        <svg className="w-[48px] h-[48px] text-white dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>

                        <h3 className="font-bold  text-white text-3xl ">Pine</h3>
                    </div>
                    <div className="text-white ml-[400px] mt-[25px]  ">
                        <h4>
                            Lorem Ipsum is simply dummy text of <br/> printing and typesetting industry.

                        </h4>
                        <div className="mt-[30px] flex flex-row gap-[10px]">
                            <div>
                                <svg className="w-[48px] h-[48px] text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <svg className="w-[48px] h-[48px] text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <svg className="w-[48px] h-[48px] text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="ml-[220px] mt-[120px]">
                    <div>
                        <button
                            className="items-center rounded-md px-7 py-2 text-sm font-medium text-white-300 hover:bg-gray-700 hover:text-white border border-white text-white  ">
                            Home</button>
                    </div>

                    <div className="mt-8">
                        <button
                            className="items-center rounded-md px-7 py-2 text-sm font-medium text-white-300 hover:bg-gray-700 hover:text-white border border-white  text-white  ">
                            Features</button>
                    </div>
                    <div className="mt-8">
                        <button
                            className="items-center rounded-md px-7 py-2 text-sm font-medium text-white-300 hover:bg-gray-700 hover:text-white border border-white  text-white  ">
                            PRICING</button>
                    </div>
                    <div className="mt-8">
                        <button
                            className="items-center rounded-md px-7 py-2 text-sm font-medium text-white-300 hover:bg-gray-700 hover:text-white border border-white text-white ">
                            Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className=" bg-gray-500 h-[30px] w-[2080px] text-center ml-[-1300px] ">
        <h2 className="font-bold text-sm">Copyright c Pine powered by Flowbase</h2>
    </div>
                        
            
            
            </div>
            </div>
            </div>
        </div>
</div>

  )
}

export default App
