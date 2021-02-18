import Card from './Card';
import './CardList.css'

function CardList({ robots }) {
    if (robots.length === 0)
        return <div className="noRobot">No robot could be found.</div>;

    return (
        <div>
            {
                robots.map((user, index) => {
                    return (
                        <Card
                            key={index}
                            id={robots[index].id}
                            name={robots[index].name}
                            email={robots[index].email}
                        />)
                })
            }
        </div>
    );
}

export default CardList;