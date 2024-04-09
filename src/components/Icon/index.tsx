import classNames from "classnames";
import styles from './index.module.scss';

export function IconDeer({
  activeHover = true,
}: {
  activeHover?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames({
        [styles.icon]: activeHover
      })}
    >
      <path d="M906.8288 567.3216c-0.2048-0.0768-0.4352-0.0768-0.64-0.1536-0.512 14.8992-10.6752 26.7264-23.5008 27.392 0.1024 0.384 0.1024 0.8192 0.2048 1.2032-77.5936 9.4464-195.2256 68.4032-250.0096 136.2176-20.1984 25.0112-39.1168 54.0928-55.7568 82.6624-0.0256-0.0768-0.1024-0.128-0.128-0.1792-13.568 25.1136-37.504 41.9584-64.9984 41.9584-27.4688 0-51.4048-16.8192-64.9728-41.9072-0.0768 0.1536-0.2048 0.256-0.2816 0.4096-16.6656-28.6464-35.6096-57.856-55.8848-82.944-54.7072-67.7888-172.1856-126.72-249.728-136.2176 0.1024-0.384 0.1024-0.8192 0.2048-1.2032-12.8-0.6656-22.9376-12.416-23.5264-27.2896-0.2048 0.1024-0.4608 0.0768-0.6656 0.1792C106.6752 448.1792-18.4576 239.2832 69.5808 79.616c-41.0624 180.3008 114.8928 421.6064 131.3024 443.9808 14.0288 19.072 104.1152 43.5968 104.1152 43.5968-1.8944-19.9936-14.1568-182.6816 76.6976-257.1008-106.9056 222.208 72.6528 334.4896 129.7152 334.4896 57.3952 0 238.3872-110.72 130.6624-334.4896 90.9312 74.4192 78.6432 237.1072 76.7488 257.1008 0 0 86.5792-24.0128 104.192-43.5968 22.528-25.088 176.64-262.1696 131.4048-443.9808C1042.5088 239.232 917.4016 448.0512 906.8288 567.3216zM858.5216 415.7952c0 0 30.5408-114.2272-21.3248-204.672 34.4576 13.7472 64.9984 86.8352 67.9936 104.064C905.728 353.6896 863.8464 417.664 858.5216 415.7952zM168.5248 415.5648c-6.2976 0.1024-45.2352-62.8992-48.5376-100.4288 2.944-17.1776 33.4848-90.2656 67.9168-104.0128C136.064 301.568 168.5248 415.5648 168.5248 415.5648z" p-id="5416">
      </path>
    </svg>
  )
}