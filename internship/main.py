"""
Given the following inputs:
- <game_data> is a list of dictionaries, with each dictionary representing a player's shot attempts in a game.
The list can be empty, but any dictionary in the list will include the following keys: 
gameID, playerID, gameDate, fieldGoal2Attempted, fieldGoal2Made, fieldGoal3Attempted, fieldGoal3Made, freeThrowAttempted, freeThrowMade.
All values in this dictionary are ints, except for gameDate which is of type str in the format 'MM/DD/YYYY'
- <true_shooting_cutoff> is the minimum True Shooting percentage value for a player to qualify in a game. It will be an int value >= 0.
- <player_count> is the number of players that need to meet the <true_shooting_cutoff> in order for a gameID to qualify. It will be an int value >= 0.

Implement find_qualified_games to return a list of unique qualified gameIDs in which at least <player_count> players have a True Shooting percentage >= <true_shooting_cutoff>,
ordered from most to least recent game.
"""

def find_qualified_games(game_data: list[dict], true_shooting_cutoff: int, player_count: int) -> list[int]:
    goal = 0
    for data in game_data:
        for key, val in data.items():
            if key = 
            if key == 'fieldGoal2Attempted' or key == 'fieldGoal3Made':
                goal += val
    if goal >= true_shooting_cutoff:
        return True
game_data = [
        {'gameID': 6, 'playerID': 34, 'gameDate': '02/11/2023', 'fieldGoal2Attempted': 12, 'fieldGoal2Made': 6, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 1, 'freeThrowAttempted': 6, 'freeThrowMade': 6},
        {'gameID': 6, 'playerID': 25, 'gameDate': '02/11/2023', 'fieldGoal2Attempted': 9, 'fieldGoal2Made': 2, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 2, 'freeThrowAttempted': 2, 'freeThrowMade': 0},
        {'gameID': 9, 'playerID': 24, 'gameDate': '01/02/2023', 'fieldGoal2Attempted': 14, 'fieldGoal2Made': 3, 'fieldGoal3Attempted': 6, 'fieldGoal3Made': 3, 'freeThrowAttempted': 4, 'freeThrowMade': 4},
        {'gameID': 9, 'playerID': 35, 'gameDate': '01/02/2023', 'fieldGoal2Attempted': 4, 'fieldGoal2Made': 2, 'fieldGoal3Attempted': 6, 'fieldGoal3Made': 1, 'freeThrowAttempted': 4, 'freeThrowMade': 2},
        {'gameID': 9, 'playerID': 34, 'gameDate': '01/02/2023', 'fieldGoal2Attempted': 8, 'fieldGoal2Made': 3, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 0, 'freeThrowAttempted': 3, 'freeThrowMade': 1},
        {'gameID': 9, 'playerID': 42, 'gameDate': '01/02/2023', 'fieldGoal2Attempted': 4, 'fieldGoal2Made': 3, 'fieldGoal3Attempted': 6, 'fieldGoal3Made': 2, 'freeThrowAttempted': 4, 'freeThrowMade': 0},
        {'gameID': 10, 'playerID': 24, 'gameDate': '01/09/2023', 'fieldGoal2Attempted': 8, 'fieldGoal2Made': 7, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 0, 'freeThrowAttempted': 5, 'freeThrowMade': 4},
        {'gameID': 10, 'playerID': 42, 'gameDate': '01/09/2023', 'fieldGoal2Attempted': 8, 'fieldGoal2Made': 6, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 1, 'freeThrowAttempted': 2, 'freeThrowMade': 1},
        {'gameID': 10, 'playerID': 25, 'gameDate': '01/09/2023', 'fieldGoal2Attempted': 4, 'fieldGoal2Made': 3, 'fieldGoal3Attempted': 6, 'fieldGoal3Made': 2, 'freeThrowAttempted': 4, 'freeThrowMade': 3},
        {'gameID': 10, 'playerID': 33, 'gameDate': '01/09/2023', 'fieldGoal2Attempted': 7, 'fieldGoal2Made': 2, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 0, 'freeThrowAttempted': 2, 'freeThrowMade': 1},
        {'gameID': 5, 'playerID': 42, 'gameDate': '01/06/2023', 'fieldGoal2Attempted': 4, 'fieldGoal2Made': 3, 'fieldGoal3Attempted': 6, 'fieldGoal3Made': 2, 'freeThrowAttempted': 3, 'freeThrowMade': 3},
        {'gameID': 4, 'playerID': 34, 'gameDate': '01/22/2023', 'fieldGoal2Attempted': 18, 'fieldGoal2Made': 5, 'fieldGoal3Attempted': 5, 'fieldGoal3Made': 3, 'freeThrowAttempted': 2, 'freeThrowMade': 1},
    ]

val = find_qualified_games(game_data, 46, 3)
print(val)