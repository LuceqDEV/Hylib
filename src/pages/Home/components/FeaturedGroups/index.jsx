import React from "react";
import StoreContext from "../../../../store/Context";



const FeaturedGroups = ({
    isGroupLoading,
    loadingGroups,
    featuredGroups,
    membersText,
}) => {

    const { config } = React.useContext(StoreContext);

    return (
        <>
            <div className="featured-groups flex-column">
                {
                    isGroupLoading &&
                    loadingGroups()
                }
                {
                    !isGroupLoading && featuredGroups.length > 0 &&
                    featuredGroups.map((groupData, index) => {
                        return (
                            <div className="featured-groups-item flex" key={index}>
                                <div className="featured-groups-badge mr-right-1 flex">
                                    <img src={`${config.hotel.groupImage}${groupData.badge}`} className="float-left mr-auto" />
                                </div>
                                <label className="color-4 text-nowrap mr-auto-top-bottom">
                                    <h5 className="bold text-nowrap">{groupData.name}</h5>
                                    <h6 className="text-nowrap">{groupData.membersCount.count} {membersText}</h6>
                                </label>
                            </div>
                        )

                    })
                }

            </div>
        </>
    )
}

export default FeaturedGroups;