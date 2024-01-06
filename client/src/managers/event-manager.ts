export enum EventType {
    PlayerAdd = 'PLAYER_ADD',
    PlayerRemove = 'PLAYER_REMOVE',
    PlayerPositionChange = 'PLAYER_POSITION_CHANGE',
};

export class EventManager {
    public static emit<T>(type: EventType, payload: T) {
        window.dispatchEvent(new CustomEvent(type.toString(), { detail: payload }))
    }
}