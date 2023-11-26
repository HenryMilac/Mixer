// Tienes que instalar react-swipeable-list
// Para resolver el error tienes que instalar prop-types
// npm i react-swipeable-list
// npm i prop-types
// https://www.npmjs.com/package/react-swipeable-list

import 'react-swipeable-list/dist/styles.css';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
  
export default function SwipeEditDelete() {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.info('swipe action triggered')}>
                <div className='bg-green-500 flex justify-center items-center'>
                    Edit
                </div>
            </SwipeAction>
        </LeadingActions>
    );
      
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='bg-red-500 flex justify-center items-center'>
                    Delete
                </div>
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <div className='flex'>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <div className='bg-gray-300 py-4 w-full m-5 text-center cursor-pointer'>
                        Item content
                    </div>
                </SwipeableListItem>
            </SwipeableList>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <div className='bg-gray-300 py-4 w-full m-5 text-center cursor-pointer'>
                        Item content
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>
    )
}