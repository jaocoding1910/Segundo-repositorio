
import random

print("🔢 Simulador de confronto entre times de futebol ⚽️\n")

# Entrada dos nomes dos times
time1 = input("Digite o nome do primeiro time: ")
time2 = input("Digite o nome do segundo time: ")

# Simulação do vencedor
vencedor = random.choice([time1, time2])

print("\n🏆 Resultado da simulação:")
print(f"{time1} vs {time2}")
print(f"👉 O vencedor é: {vencedor}!")