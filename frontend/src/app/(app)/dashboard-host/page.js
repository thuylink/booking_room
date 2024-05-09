import Link from 'next/link'
import Button from '@/components/Button'
import './style.css'
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faListDots } from '@fortawesome/free-solid-svg-icons'
import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
                rel="stylesheet"
            />
            <div className="task-manager">
                <div className="left-bar">
                    <div className="upper-part">
                        <div className="actions">
                            <div className="circle"></div>
                            <div className="circle-2"></div>
                        </div>
                    </div>
                    <div className="left-content">
                        <ul className="action-list">

                        <li className="item">
                                <Link href="/add-category">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faShop}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Thống kê
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="item">
                                <Link href="/all-booking">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Đơn đặt phòng 
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="item">
                                <Link href="/add-product">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faHouseCircleCheck}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Tạo mới nhà ở
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="item">
                                <Link href="/all-product">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faHouse}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Danh sách nhà đã tạo
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="item">
                                <Link href="/add-category">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faListDots}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Tạo mới danh mục
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="item">
                                <Link href="/all-category">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faTableList}
                                            className="times-icon"
                                        />
                                        <span className="ml-2">
                                            Danh sách danh mục
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-content">
                    <div class="header">thống kê ở đây</div>
                    
                </div>
                <div class="right-bar">
                   
                    <div class="right-content">
                        
                    
                        <div class="task-box blue">
                            <div class="description-task">
                                <div class="task-name">Tổng số nhà ở đã tạo</div>
                            </div>
                            <div class="more-button"></div>
                            
                        </div>
                        <div class="task-box red">
                            <div class="description-task">
                                <div class="task-name">Tổng số danh mục đã tạo</div>
                            </div>
                            <div class="more-button"></div>
                            
                        </div>
                        <div class="task-box green">
                            <div class="description-task">
                                <div class="task-name">10 nhà được</div>
                            </div>
                            <div class="more-button"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

// <div class="content-categories">
//                         <div class="label-wrapper">
//                             <input
//                                 class="nav-item"
//                                 name="nav"
//                                 type="radio"
//                                 id="opt-1"
//                             />
//                             <label class="category" for="opt-1">
//                                 All
//                             </label>
//                         </div>
//                         <div class="label-wrapper">
//                             <input
//                                 class="nav-item"
//                                 name="nav"
//                                 type="radio"
//                                 id="opt-2"
//                                 checked
//                             />
//                             <label class="category" for="opt-2">
//                                 Important
//                             </label>
//                         </div>
//                         <div class="label-wrapper">
//                             <input
//                                 class="nav-item"
//                                 name="nav"
//                                 type="radio"
//                                 id="opt-3"
//                             />
//                             <label class="category" for="opt-3">
//                                 Notes
//                             </label>
//                         </div>
//                         <div class="label-wrapper">
//                             <input
//                                 class="nav-item"
//                                 name="nav"
//                                 type="radio"
//                                 id="opt-4"
//                             />
//                             <label class="category" for="opt-4">
//                                 Links
//                             </label>
//                         </div>
//                     </div>
//                     <div class="tasks-wrapper">
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-1"
//                                 checked
//                             />
//                             <label for="item-1">
//                                 <span class="label-text">
//                                     Dashboard Design Implementation
//                                 </span>
//                             </label>
//                             <span class="tag approved">Approved</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-2"
//                                 checked
//                             />
//                             <label for="item-2">
//                                 <span class="label-text">
//                                     Create a userflow
//                                 </span>
//                             </label>
//                             <span class="tag progress">In Progress</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-3"
//                             />
//                             <label for="item-3">
//                                 <span class="label-text">
//                                     Application Implementation
//                                 </span>
//                             </label>
//                             <span class="tag review">In Review</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-4"
//                             />
//                             <label for="item-4">
//                                 <span class="label-text">
//                                     Create a Dashboard Design
//                                 </span>
//                             </label>
//                             <span class="tag progress">In Progress</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-5"
//                             />
//                             <label for="item-5">
//                                 <span class="label-text">
//                                     Create a Web Application Design
//                                 </span>
//                             </label>
//                             <span class="tag approved">Approved</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-6"
//                             />
//                             <label for="item-6">
//                                 <span class="label-text">
//                                     Interactive Design
//                                 </span>
//                             </label>
//                             <span class="tag review">In Review</span>
//                         </div>
//                         <div class="header upcoming">Upcoming Tasks</div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-7"
//                             />
//                             <label for="item-7">
//                                 <span class="label-text">
//                                     Dashboard Design Implementation
//                                 </span>
//                             </label>
//                             <span class="tag waiting">Waiting</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-8"
//                             />
//                             <label for="item-8">
//                                 <span class="label-text">
//                                     Create a userflow
//                                 </span>
//                             </label>
//                             <span class="tag waiting">Waiting</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-9"
//                             />
//                             <label for="item-9">
//                                 <span class="label-text">
//                                     Application Implementation
//                                 </span>
//                             </label>
//                             <span class="tag waiting">Waiting</span>
//                         </div>
//                         <div class="task">
//                             <input
//                                 class="task-item"
//                                 name="task"
//                                 type="checkbox"
//                                 id="item-10"
//                             />
//                             <label for="item-10">
//                                 <span class="label-text">
//                                     Create a Dashboard Design
//                                 </span>
//                             </label>
//                             <span class="tag waiting">Waiting</span>
//                         </div>
//                     </div>