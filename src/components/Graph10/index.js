import React from 'react'
import './index.css'

const Graph10Table = () => {
  return (
    <table className="table table-hover graph10-table">
      <thead className="thead-dark graph10-table-head">
        <tr>
          <th scope="col">รายการ</th>
          <th scope="col">ปี 2554</th>
          <th scope="col">ปี 2555</th>
          <th scope="col">ปี 2556</th>
          <th scope="col">ปี 2557</th>
          <th scope="col">ปี 2558</th>
          <th scope="col">ปี 2559</th>
          <th scope="col">ปี 2560</th>
        </tr>
      </thead>
      <thead className="thead-light graph10-table-thead">
        <tr>
          <th colspan="8">ข้อมูลทั่วไป</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>อัตราแลกเปลี่ยนเงินตราต่างประเทศ1 (บาท)</td>
          <td>30.4944</td>
          <td>31.0848</td>
          <td>30.7319</td>
          <td>32.4841</td>
          <td>34.2524</td>
          <td>35.298</td>
          <td>32.659</td>
        </tr>
        <tr>
          <td>จำนวนประชากร2 (คน)</td>
          <td>64,076,033</td>
          <td>64,456,695</td>
          <td>64,785,909</td>
          <td>65,124,716</td>
          <td>65,729,098</td>
          <td>65,931,550</td>
          <td>66,188,503</td>
        </tr>
        <tr>
          <td>ผลิตภัณฑ์มวลรวมภายในประเทศ3 (ล้านบาท)</td>
          <td>10,540,134</td>
          <td>11,375,349</td>
          <td>11,898,710</td>
          <td>12,141,096</td>
          <td>13,537,500</td>
          <td>14,366,557</td>
          <td>15,451,959</td>
        </tr>
      </tbody>
      <thead className="thead-light graph10-table-thead">
        <tr>
          <th colspan="8">ข้อมูลการวิจัยและพัฒนา</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>จำนวนบริษัทที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (ราย)</td>
          <td>2,604</td>
          <td>2,849</td>
          <td>2,829</td>
          <td>5,547</td>
          <td>5,334</td>
          <td>5,023</td>
          <td>7,333</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท) (BERD)</td>
          <td>20,683.73</td>
          <td>23,349.63</td>
          <td>26,768.19</td>
          <td>34,444.58</td>
          <td>59,442.56</td>
          <td>82,701.23</td>
          <td>123,942.04</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านเหรียญสหรัฐ)</td>
          <td>678.28</td>
          <td>751.16</td>
          <td>871.02</td>
          <td>1,060.35</td>
          <td>1,735.43</td>
          <td>2,342.94</td>
          <td>3,795.03</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (บาท/คน)</td>
          <td>322.8</td>
          <td>362.25</td>
          <td>413.18</td>
          <td>528.9</td>
          <td>904.36</td>
          <td>1,254.35</td>
          <td>1,872.56</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (เหรียญสหรัฐ /คน)</td>
          <td>10.59</td>
          <td>11.65</td>
          <td>13.44</td>
          <td>16.28</td>
          <td>26.4</td>
          <td>35.54</td>
          <td>57.34</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบ FTE (ล้านบาท/คน-ปี)</td>
          <td>0.93</td>
          <td>0.97</td>
          <td>1.05</td>
          <td>0.88</td>
          <td>1.21</td>
          <td>1.33</td>
          <td>1.44</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบรายหัว (ล้านบาท/คน)</td>
          <td>0.83</td>
          <td>0.91</td>
          <td>0.96</td>
          <td>0.82</td>
          <td>1.01</td>
          <td>1.19</td>
          <td>1.35</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อบริษัท (ล้านบาท/ราย)</td>
          <td>7.94</td>
          <td>8.19</td>
          <td>9.46</td>
          <td>6.21</td>
          <td>11.14</td>
          <td>16.47</td>
          <td>16.9</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อผลิตภัณฑ์มวลรวมภายในประเทศ (BERD/GDP) (%)</td>
          <td>0.2</td>
          <td>0.21</td>
          <td>0.22</td>
          <td>0.28</td>
          <td>0.44</td>
          <td>0.58</td>
          <td>0.8</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) (คน-ปี)</td>
          <td>22,245</td>
          <td>24,063</td>
          <td>25,513</td>
          <td>39,043</td>
          <td>49,004</td>
          <td>61,955</td>
          <td>86,343</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (รายหัว) (คน)</td>
          <td>24,938</td>
          <td>25,779</td>
          <td>27,779</td>
          <td>42,247</td>
          <td>58,744</td>
          <td>69,476</td>
          <td>92,131</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) ต่อประชากร 10,000 คน</td>
          <td>3.5</td>
          <td>3.7</td>
          <td>3.9</td>
          <td>6</td>
          <td>7.5</td>
          <td>9.4</td>
          <td>13</td>
        </tr>
        <tr>
          <td>จำนวนนักวิจัยแบบFTE(คน-ปี)</td>
          <td>13,129</td>
          <td>15,064</td>
          <td>16,370</td>
          <td>28,440</td>
          <td>35,465</td>
          <td>53,576</td>
          <td>56,782</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อนักวิจัยแบบFTE (ล้านบาท/คน-ปี)</td>
          <td>1.58</td>
          <td>1.55</td>
          <td>1.64</td>
          <td>1.21</td>
          <td>1.68</td>
          <td>1.54</td>
          <td>2.18</td>
        </tr>
        <tr>
          <td>จำนวนนักวิจัยแบบรายหัว(คน)</td>
          <td>14,256</td>
          <td>16,019</td>
          <td>17,304</td>
          <td>30,029</td>
          <td>30,234</td>
          <td>47,363</td>
          <td>60,781</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อนักวิจัยแบบรายหัว (ล้านบาท/คน)</td>
          <td>1.45</td>
          <td>1.46</td>
          <td>1.55</td>
          <td>1.15</td>
          <td>1.97</td>
          <td>1.75</td>
          <td>2.04</td>
        </tr>
      </tbody>
    </table>
  )
}

export default () => {
  return (
    <div className="graph10-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ตารางแสดงข้อมูลภาพรวมการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม
          </p>
          <p className="graph10-graph-subtitle">
            ในภาคอุตสาหกรรมของประเทศไทย ตั้งแต่ปี 2554-2560
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 table-responsive" data-aos="fade-up">
          <Graph10Table />
        </div>
      </div>
    </div>
  )
}
