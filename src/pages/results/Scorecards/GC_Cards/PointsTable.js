import React, { useEffect, useState } from 'react';
import Styles from "../../../../styles/components/GC_Live/pointsTable.module.css";

function PointsTable(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [pointsGroup, setPointsGroup] = useState('A');
    const [pointsData, setPointsData] = useState();

    useEffect(() => {
        fetch(props.url)
            .then((response) => (response.json())).then((responseData) => {
                const filteredData = responseData.data.filter((item) => (item.group === pointsGroup));
                setPointsData(filteredData);
                setIsLoading(false);
            }).catch((err) => setIsLoading(false));
    }, [pointsGroup])

    const changeGroup = (newGroup) => {
        setIsLoading(true);
        setPointsData({});
        setPointsGroup(newGroup);
    }

    if (props.sport === "Football") {
        return (
            <>
                {
                    isLoading ? (
                        <div className={Styles.loader}>
                            <br /><br />
                            <i className="fa fa-spinner fa-pulse fa-2x" aria-hidden="true" style={{ "color": "white", "textAlign": "center" }} />
                        </div>
                    ) : (
                        <div className={Styles.container}>
                            <select defaultValue={pointsGroup} onChange={(e) => (changeGroup(e.target.value))}>
                                <option value={'A'}>
                                    Group A
                                </option>
                                <option value={'B'}>
                                    Group B
                                </option>
                                <option value={'C'}>
                                    Group C
                                </option>
                                <option value={'D'}>
                                    Group D
                                </option>
                            </select>
                            {
                                pointsData && (
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className={Styles.team}>
                                                    Team
                                                </td>
                                                <td className={Styles.points}>
                                                    P
                                                </td>
                                                <td className={Styles.points}>
                                                    W
                                                </td>
                                                <td className={Styles.points}>
                                                    L
                                                </td>
                                                <td className={Styles.points}>
                                                    D
                                                </td>
                                                <td className={Styles.points}>
                                                    Points
                                                </td>
                                                <td className={Styles.points}>
                                                    GD
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pointsData.map((row) => (
                                                    <tr>
                                                        <td className={Styles.team}>
                                                            {row.team}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.p}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.w}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.l}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.d}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.points}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.gd}
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </div>

                    )
                }

            </>
        )
    }
    else {
        return (
            <>
                {
                    isLoading ? (
                        <div className={Styles.loader}>
                            <br /><br />
                            <i className="fa fa-spinner fa-pulse fa-2x" aria-hidden="true" style={{ "color": "white", "textAlign": "center" }} />
                        </div>
                    ) : (
                        <div className={Styles.container}>
                            <select defaultValue={pointsGroup} onChange={(e) => (changeGroup(e.target.value))}>
                                <option value={'A'}>
                                    Group A
                                </option>
                                <option value={'B'}>
                                    Group B
                                </option>
                                <option value={'C'}>
                                    Group C
                                </option>
                                <option value={'D'}>
                                    Group D
                                </option>
                            </select>
                            {
                                pointsData && (
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className={Styles.team}>
                                                    Team
                                                </td>
                                                <td className={Styles.points}>
                                                    P
                                                </td>
                                                <td className={Styles.points}>
                                                    W
                                                </td>
                                                <td className={Styles.points}>
                                                    L
                                                </td>
                                                <td className={Styles.points}>
                                                    D
                                                </td>
                                                <td className={Styles.points}>
                                                    Points
                                                </td>
                                                <td className={Styles.points}>
                                                    NRR
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pointsData.map((row) => (
                                                    <tr>
                                                        <td className={Styles.team}>
                                                            {row.team}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.p}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.w}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.l}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.d}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.points}
                                                        </td>
                                                        <td className={Styles.points}>
                                                            {row.nrr}
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </div>

                    )
                }

            </>
        )
    }
}

export default PointsTable